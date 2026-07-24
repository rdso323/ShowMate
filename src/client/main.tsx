import { StrictMode, createContext, useContext, useEffect, useMemo, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import { PartySocket } from "partysocket";
import { catalog as seedCatalog } from "../shared/catalog";
import {
  DURATION_BUCKETS,
  DURATION_LABELS,
  MAX_MEMBERS,
  MEDIA_TYPES,
  MEDIA_TYPE_LABELS,
  MIN_MEMBERS_TO_START,
  PLATFORM_LABELS,
  PLATFORMS,
  allowedDurationBuckets,
  normalizeDurations,
  type ClientMessage,
  type DurationBucket,
  type MediaType,
  type Platform,
  type RoomState,
  type ServerMessage,
  type Show,
  type SwipeChoice,
} from "../shared/types";
import "./styles.css";

const CatalogContext = createContext<Show[]>(seedCatalog);
const storedName = localStorage.getItem("showmate:name") ?? "";
const initialRoom = new URLSearchParams(location.search).get("room")?.toUpperCase() ?? "";

function App() {
  const [name, setName] = useState(storedName);
  const [roomInput, setRoomInput] = useState(initialRoom);
  const [roomCode, setRoomCode] = useState("");
  const [memberId] = useState(() => sessionStorage.getItem("showmate:member") ?? createMemberId());
  const [room, setRoom] = useState<RoomState>();
  const [socket, setSocket] = useState<PartySocket>();
  const [error, setError] = useState("");
  const [connected, setConnected] = useState(false);
  const [shows, setShows] = useState<Show[]>(seedCatalog);
  const [leavePromptOpen, setLeavePromptOpen] = useState(false);

  useEffect(() => {
    sessionStorage.setItem("showmate:member", memberId);
  }, [memberId]);

  useEffect(() => {
    fetch("/api/catalog")
      .then((response) => response.ok ? response.json() : Promise.reject())
      .then((payload) => {
        if (Array.isArray(payload) && payload.length) setShows(payload as Show[]);
      })
      .catch(() => undefined);
  }, []);

  useEffect(() => {
    shows.slice(0, 24).forEach((show) => preloadImage(posterAssetUrl(show.id, "thumbnail"), "low"));
  }, [shows]);

  useEffect(() => {
    if (!room?.deck.length) return;
    const deckShows = room.deck.map((id) => shows.find((show) => show.id === id)).filter((show): show is Show => Boolean(show));
    deckShows.forEach((show) => preloadImage(posterAssetUrl(show.id, "thumbnail"), "low"));
    deckShows.slice(0, 5).forEach((show, index) => preloadImage(posterAssetUrl(show.id, "full"), index === 0 ? "high" : "low"));
  }, [room?.deck, shows]);

  useEffect(() => {
    if (!roomCode) return;
    const party = new PartySocket({ host: location.host, party: "show-mate-room", room: roomCode.toLowerCase() });
    party.addEventListener("open", () => {
      setConnected(true);
      send(party, { type: "join", memberId, name });
    });
    party.addEventListener("close", () => setConnected(false));
    party.addEventListener("message", (event) => {
      const message = JSON.parse(String(event.data)) as ServerMessage;
      if (message.type === "state") setRoom(message.state);
      if (message.type === "error") setError(message.message);
      if (message.type === "removed") {
        setError(message.message);
        leaveToHome(party);
      }
    });
    setSocket(party);
    return () => party.close();
  }, [memberId, name, roomCode]);

  async function createRoom() {
    if (!validName(name)) return setError("Add your name first.");
    const response = await fetch("/api/room-code");
    const { code } = await response.json() as { code: string };
    enterRoom(code);
  }

  function joinRoom() {
    if (!validName(name)) return setError("Add your name first.");
    if (!/^[A-Z2-9]{5}$/.test(roomInput.trim().toUpperCase())) return setError("Enter a valid 5-character room code.");
    enterRoom(roomInput.trim().toUpperCase());
  }

  function enterRoom(code: string) {
    localStorage.setItem("showmate:name", name.trim());
    history.replaceState({}, "", `/?room=${code}`);
    setError("");
    setLeavePromptOpen(false);
    setRoomCode(code);
  }

  function leaveToHome(activeSocket?: PartySocket) {
    activeSocket?.close();
    socket?.close();
    setSocket(undefined);
    setRoom(undefined);
    setRoomCode("");
    setConnected(false);
    setLeavePromptOpen(false);
    setRoomInput("");
    history.replaceState({}, "", "/");
  }

  function emit(message: ClientMessage) {
    if (socket?.readyState === WebSocket.OPEN) send(socket, message);
  }

  return (
    <CatalogContext.Provider value={shows}>
      {!roomCode ? (
        <Landing name={name} setName={setName} roomInput={roomInput} setRoomInput={setRoomInput} createRoom={createRoom} joinRoom={joinRoom} error={error} />
      ) : !room ? (
        <Shell><LoadingRoom code={roomCode} connected={connected} /></Shell>
      ) : !room.members.some((member) => member.id === memberId) && room.members.length >= MAX_MEMBERS ? (
        <Shell><FullRoom code={roomCode} /></Shell>
      ) : !room.members.some((member) => member.id === memberId) ? (
        <Shell><LoadingRoom code={roomCode} connected={connected} /></Shell>
      ) : (
        <Shell>
          <Header room={room} connected={connected} onLogoClick={() => setLeavePromptOpen(true)} />
          {error && <div className="toast" role="alert">{error}<button onClick={() => setError("")} aria-label="Dismiss">×</button></div>}
          {leavePromptOpen && (
            <LeaveRoomDialog
              roomCode={room.code}
              onStay={() => setLeavePromptOpen(false)}
              onHome={() => leaveToHome()}
            />
          )}
          {room.status === "lobby" && <Lobby room={room} memberId={memberId} emit={emit} />}
          {room.status === "swiping" && <SwipeDeck room={room} memberId={memberId} emit={emit} />}
          {(room.status === "matched" || room.status === "recommended") && <Result room={room} memberId={memberId} emit={emit} />}
        </Shell>
      )}
    </CatalogContext.Provider>
  );
}

function useShow(id?: string): Show | undefined {
  const shows = useContext(CatalogContext);
  return useMemo(() => (id ? shows.find((show) => show.id === id) : undefined), [id, shows]);
}

function Landing(props: { name: string; setName: (value: string) => void; roomInput: string; setRoomInput: (value: string) => void; createRoom: () => void; joinRoom: () => void; error: string }) {
  return (
    <main className="landing">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />
      <section className="landing-copy">
        <div className="wordmark"><Logo /> ShowMate</div>
        <p className="eyebrow">Up to {MAX_MEMBERS} people. One perfect watch.</p>
        <h1>Stop scrolling.<br /><em>Start matching.</em></h1>
        <p className="lede">Pick platforms, swipe movies and shows, and find the title your whole group actually wants tonight.</p>
        <div className="proof"><span>1</span> Create a room <i /> <span>2</span> Invite your group <i /> <span>3</span> Match</div>
      </section>
      <section className="entry-card">
        <div className="entry-sticker">Tonight's plan</div>
        <h2>Who's watching?</h2>
        <label>Your name<input value={props.name} onChange={(event) => props.setName(event.target.value)} placeholder="Alex" maxLength={24} autoFocus /></label>
        <button className="primary" onClick={props.createRoom}>Create a room <Arrow /></button>
        <div className="divider"><span>or join your group</span></div>
        <div className="join-row">
          <input aria-label="Room code" value={props.roomInput} onChange={(event) => props.setRoomInput(event.target.value.toUpperCase())} placeholder="ROOM CODE" maxLength={5} onKeyDown={(event) => event.key === "Enter" && props.joinRoom()} />
          <button onClick={props.joinRoom}>Join</button>
        </div>
        {props.error && <p className="form-error" role="alert">{props.error}</p>}
      </section>
    </main>
  );
}

function Lobby({ room, memberId, emit }: { room: RoomState; memberId: string; emit: (message: ClientMessage) => void }) {
  const isHost = room.members[0]?.id === memberId;
  const shareUrl = `${location.origin}/?room=${room.code}`;
  const mediaTypes = room.mediaTypes?.length ? room.mediaTypes : [...MEDIA_TYPES];
  const allowedDurations = allowedDurationBuckets(mediaTypes);
  const durations = normalizeDurations(mediaTypes, room.durations?.length ? room.durations : DURATION_BUCKETS);
  const blockedDurations = DURATION_BUCKETS.filter((duration) => !allowedDurations.includes(duration));
  const configure = (platforms: Platform[], nextMediaTypes: MediaType[], nextDurations: DurationBucket[]) =>
    emit({
      type: "configure",
      memberId,
      platforms,
      mediaTypes: nextMediaTypes,
      durations: normalizeDurations(nextMediaTypes, nextDurations),
    });
  const canStart = room.members.length >= MIN_MEMBERS_TO_START
    && room.platforms.length
    && mediaTypes.length
    && durations.length;

  async function copyInvite() {
    await navigator.clipboard.writeText(shareUrl);
  }

  const openSlots = Math.min(MAX_MEMBERS, Math.max(room.members.length + 1, MIN_MEMBERS_TO_START));

  return (
    <main className="screen lobby-screen">
      <div className="section-heading"><p className="eyebrow">Room {room.code}</p><h1>Set the mood.</h1><p>Choose what the group has, invite up to {MAX_MEMBERS}, then start swiping.</p></div>
      <section className="invite-panel">
        <div><span className="panel-label">Invite your group</span><strong>{room.code}</strong></div>
        <button onClick={copyInvite}><Copy /> Copy link</button>
      </section>
      <section className="members">
        {Array.from({ length: openSlots }, (_, slot) => {
          const member = room.members[slot];
          const canRemove = isHost && member && slot !== 0;
          return (
            <div className={`member ${member ? "filled" : ""}`} key={member?.id ?? `slot-${slot}`}>
              <Avatar name={member?.name} />
              <div>
                <strong>{member?.name ?? (slot === 0 ? "Waiting for host" : "Open spot")}</strong>
                <span>{slot === 0 ? "Host" : member ? "Ready" : "Share the room link"}</span>
              </div>
              {canRemove ? (
                <button
                  className="remove-member"
                  aria-label={`Remove ${member.name}`}
                  onClick={() => emit({ type: "remove", memberId, targetId: member.id })}
                >
                  <Close />
                </button>
              ) : (
                <b className={member?.connected ? "online" : ""} />
              )}
            </div>
          );
        })}
      </section>
      <p className="member-count">{room.members.length} / {MAX_MEMBERS} joined</p>
      <p className="defaults-note">Everything is selected by default — movies, TV, every platform, and every runtime. Turn options off only if you want a tighter deck.</p>
      <Filter
        title="Movies, TV, or both?"
        options={MEDIA_TYPES}
        selected={mediaTypes}
        labels={MEDIA_TYPE_LABELS}
        disabled={!isHost}
        onChange={(next) => configure(room.platforms, next as MediaType[], durations)}
      />
      <Filter
        title="Where are you watching?"
        options={PLATFORMS}
        selected={room.platforms}
        labels={PLATFORM_LABELS}
        disabled={!isHost}
        onChange={(platforms) => configure(platforms as Platform[], mediaTypes, durations)}
      />
      <Filter
        title="How much time do you have?"
        options={DURATION_BUCKETS}
        selected={durations}
        labels={DURATION_LABELS}
        disabled={!isHost}
        disabledOptions={blockedDurations}
        hint={blockedDurations.length ? "Short runtimes are hidden for movies-only rooms." : undefined}
        onChange={(next) => configure(room.platforms, mediaTypes, next as DurationBucket[])}
      />
      {isHost
        ? <button className="primary sticky-action" disabled={!canStart} onClick={() => emit({ type: "start", memberId })}>{canStart ? `Start swiping · ${room.members.length} people` : `Need at least ${MIN_MEMBERS_TO_START} people`} <Arrow /></button>
        : <div className="waiting-note"><span className="pulse" /> Waiting for the host to start</div>}
    </main>
  );
}

function Filter<T extends string>({
  title,
  options,
  selected,
  labels,
  disabled,
  disabledOptions = [],
  hint,
  onChange,
}: {
  title: string;
  options: readonly T[];
  selected: readonly T[];
  labels: Record<T, string>;
  disabled: boolean;
  disabledOptions?: readonly T[];
  hint?: string;
  onChange: (value: T[]) => void;
}) {
  return (
    <section className="filter">
      <h3>{title}</h3>
      {hint && <p className="filter-hint">{hint}</p>}
      <div className="chips">
        {options.map((option) => {
          const blocked = disabledOptions.includes(option);
          return (
            <button
              key={option}
              disabled={disabled || blocked}
              className={`${selected.includes(option) ? "selected" : ""} ${blocked ? "blocked" : ""}`}
              onClick={() => onChange(selected.includes(option) ? selected.filter((value) => value !== option) : [...selected, option])}
            >
              {labels[option]}
            </button>
          );
        })}
      </div>
    </section>
  );
}

function SwipeDeck({ room, memberId, emit }: { room: RoomState; memberId: string; emit: (message: ClientMessage) => void }) {
  const shows = useContext(CatalogContext);
  const isHost = room.members[0]?.id === memberId;
  const swipes = room.swipes[memberId] ?? {};
  const currentId = room.deck.find((id) => !swipes[id]);
  const show = currentId ? shows.find((entry) => entry.id === currentId) : undefined;
  const completed = Object.keys(swipes).length;
  const [exit, setExit] = useState<SwipeChoice>();
  const [showAnalytics, setShowAnalytics] = useState(false);
  const pointerStart = useRef<number | undefined>(undefined);
  const [drag, setDrag] = useState(0);
  const others = room.members.filter((member) => member.id !== memberId).map((member) => member.name);

  useEffect(() => {
    const upcoming = room.deck.filter((id) => !swipes[id]).slice(0, 5);
    upcoming.forEach((id, index) => {
      if (shows.some((entry) => entry.id === id)) preloadImage(posterAssetUrl(id, "full"), index === 0 ? "high" : "low");
    });
  }, [currentId, room.deck, shows, swipes]);

  function swipe(choice: SwipeChoice) {
    if (!show || exit) return;
    primeMatchSound();
    setExit(choice);
    window.setTimeout(() => {
      emit({ type: "swipe", memberId, showId: show.id, choice });
      setExit(undefined);
      setDrag(0);
    }, 220);
  }

  if (!show) {
    const mediaLabel = (room.mediaTypes?.length === 1 && room.mediaTypes[0] === "movie")
      ? "movies"
      : (room.mediaTypes?.length === 1 && room.mediaTypes[0] === "tv")
        ? "TV shows"
        : "titles";
    return (
      <main className="screen deck-finished">
        <div className="orbit"><Logo /></div>
        <p className="eyebrow">Deck complete</p>
        <h1>We've gone through all the {mediaLabel}.</h1>
        <p>No group match yet. Let our edge AI combine everyone's tastes and break the tie.</p>
        <button className="primary" onClick={() => emit({ type: "pick-for-us", memberId })}>Pick for us <Spark /></button>
        {isHost && <HostAnalytics room={room} />}
      </main>
    );
  }

  return (
    <main className="screen swipe-screen">
      <div className="deck-top">
        <div><span className="live-dot" /> Live with {others.length ? others.join(", ") : "your group"}</div>
        {isHost && <button className="analytics-toggle" onClick={() => setShowAnalytics((value) => !value)}>{showAnalytics ? "Hide votes" : "Host votes"}</button>}
      </div>
      <div className="progress"><i style={{ width: `${((completed + 1) / Math.max(room.deck.length, 1)) * 100}%` }} /></div>
      {isHost && showAnalytics && <HostAnalytics room={room} compact />}
      <div className="card-stack">
        <div className="show-card behind" />
        <article
          className={`show-card active ${exit ? `exit-${exit}` : ""}`}
          style={{ transform: exit ? undefined : `translateX(${drag}px) rotate(${drag / 22}deg)` }}
          onPointerDown={(event) => { pointerStart.current = event.clientX; event.currentTarget.setPointerCapture(event.pointerId); }}
          onPointerMove={(event) => pointerStart.current !== undefined && setDrag(event.clientX - pointerStart.current)}
          onPointerUp={() => { if (Math.abs(drag) > 90) swipe(drag > 0 ? "like" : "pass"); else setDrag(0); pointerStart.current = undefined; }}
        >
          {drag > 35 && <div className="swipe-stamp like-stamp">LIKE</div>}
          {drag < -35 && <div className="swipe-stamp pass-stamp">PASS</div>}
          <Poster show={show} />
          <div className="card-details">
            <div className="title-line"><h2>{show.title}</h2><span>{show.rating.toFixed(1)}</span></div>
            <p>{show.year} · {show.runtime} min · {PLATFORM_LABELS[show.platform]} · {MEDIA_TYPE_LABELS[show.mediaType]}</p>
            <div className="tag-row">{show.genres.map((genre) => <span key={genre}>{genre}</span>)}</div>
            <p className="synopsis">{show.synopsis}</p>
          </div>
        </article>
      </div>
      <div className="swipe-actions"><button className="pass-button" onClick={() => swipe("pass")} aria-label="Pass"><Close /></button><div><strong>Swipe or tap</strong><span>Your deck adapts as you like</span></div><button className="like-button" onClick={() => swipe("like")} aria-label="Like"><Heart /></button></div>
      {completed >= 4 && <button className="text-action" onClick={() => emit({ type: "pick-for-us", memberId })}>Can't decide? Pick for us</button>}
    </main>
  );
}

function HostAnalytics({ room, compact = false }: { room: RoomState; compact?: boolean }) {
  const shows = useContext(CatalogContext);
  const votedShowIds = [...new Set(Object.values(room.swipes).flatMap((votes) => Object.keys(votes)))]
    .filter((showId) => room.deck.includes(showId) || Object.values(room.swipes).some((votes) => votes[showId]))
    .slice(0, compact ? 6 : 20);

  if (!votedShowIds.length) {
    return <section className={`host-analytics ${compact ? "compact" : ""}`}><p className="panel-label">Host view</p><p>No votes yet. Swipes from the group will appear here.</p></section>;
  }

  return (
    <section className={`host-analytics ${compact ? "compact" : ""}`} aria-label="Host swipe analytics">
      <div className="host-analytics-head"><p className="panel-label">Host only</p><strong>Who voted what</strong></div>
      <div className="host-analytics-list">
        {votedShowIds.map((showId) => {
          const show = shows.find((entry) => entry.id === showId);
          return (
            <article key={showId} className="host-vote-row">
              <div>
                <strong>{show?.title ?? showId}</strong>
                <span>{show ? `${PLATFORM_LABELS[show.platform]} · ${MEDIA_TYPE_LABELS[show.mediaType]}` : "Title"}</span>
              </div>
              <ul>
                {room.members.map((member) => {
                  const vote = room.swipes[member.id]?.[showId];
                  return <li key={member.id} className={vote ?? "pending"}><span>{member.name}</span><em>{vote === "like" ? "Like" : vote === "pass" ? "Pass" : "—"}</em></li>;
                })}
              </ul>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function Result({ room, memberId, emit }: { room: RoomState; memberId: string; emit: (message: ClientMessage) => void }) {
  const recommendation = room.recommendation;
  const show = useShow(recommendation?.showId ?? room.matchedShowId);
  const matched = room.status === "matched";
  const isHost = room.members[0]?.id === memberId;
  const playedSound = useRef(false);

  useEffect(() => {
    if (matched && !playedSound.current) {
      playedSound.current = true;
      playMatchSound();
    }
  }, [matched]);

  if (!show) return <LoadingRoom code={room.code} connected />;
  return (
    <main className="screen result-screen">
      <Confetti />
      <p className="eyebrow">{matched ? (room.members.length > 2 ? "The group said yes" : "You both said yes") : "ShowMate pick"}</p>
      <h1>{matched ? "It's a match." : "We found your middle ground."}</h1>
      <div className="result-poster"><Poster show={show} /><div className="match-badge"><Heart /> {matched ? "MATCH" : "FOR YOU"}</div></div>
      <div className="result-copy"><span>{PLATFORM_LABELS[show.platform]} · {show.runtime} min · {MEDIA_TYPE_LABELS[show.mediaType]}</span><h2>{show.title}</h2><p>{recommendation?.reason ?? (room.members.length > 2 ? "Everyone picked it. Tonight's decision is settled." : "You both picked it. Tonight's decision is settled.")}</p></div>
      <div className="result-actions">
        <a className="primary watch-link" href={show.watchUrl} target="_blank" rel="noreferrer">Watch on {PLATFORM_LABELS[show.platform]} <Arrow /></a>
        {matched && <button className="continue-button" onClick={() => emit({ type: "continue", memberId })}>Keep swiping</button>}
      </div>
      {isHost && <HostAnalytics room={room} />}
      <small>Room {room.code} · Powered by Cloudflare's edge</small>
    </main>
  );
}

function Poster({ show }: { show: Show }) {
  const [thumbnailLoadedFor, setThumbnailLoadedFor] = useState("");
  const [fullLoadedFor, setFullLoadedFor] = useState("");
  const thumbnailLoaded = thumbnailLoadedFor === show.id;
  const fullLoaded = fullLoadedFor === show.id;

  return (
    <div className="poster" style={{ "--accent": show.accent } as React.CSSProperties}>
      <div className="poster-fallback"><span>{show.genres[0]}</span><strong>{show.title}</strong><i>{show.year}</i></div>
      <img className={`poster-image poster-thumbnail ${thumbnailLoaded ? "loaded" : ""}`} src={posterAssetUrl(show.id, "thumbnail")} alt="" aria-hidden="true" decoding="async" fetchPriority="high" onLoad={() => setThumbnailLoadedFor(show.id)} onError={(event) => { event.currentTarget.hidden = true; }} />
      <img className={`poster-image poster-full ${fullLoaded ? "loaded" : ""}`} src={posterAssetUrl(show.id, "full")} alt={`${show.title} poster`} decoding="async" fetchPriority="high" onLoad={() => setFullLoadedFor(show.id)} onError={(event) => { event.currentTarget.hidden = true; }} />
      <span className="poster-platform">{PLATFORM_LABELS[show.platform]}</span>
    </div>
  );
}

function Header({ room, connected, onLogoClick }: { room: RoomState; connected: boolean; onLogoClick: () => void }) {
  return (
    <header>
      <button className="wordmark wordmark-button" type="button" onClick={onLogoClick} aria-label="ShowMate menu">
        <Logo /> ShowMate
      </button>
      <div className="header-room"><span className={connected ? "connected" : ""} /> {room.code}</div>
    </header>
  );
}

function LeaveRoomDialog({ roomCode, onHome, onStay }: { roomCode: string; onHome: () => void; onStay: () => void }) {
  return (
    <div className="modal-backdrop" role="presentation" onClick={onStay}>
      <div className="modal" role="dialog" aria-modal="true" aria-labelledby="leave-room-title" onClick={(event) => event.stopPropagation()}>
        <p className="eyebrow">Room {roomCode}</p>
        <h2 id="leave-room-title">Leave this room?</h2>
        <p>Go home to start fresh, or stay here with your group.</p>
        <div className="modal-actions">
          <button className="primary" onClick={onHome}>Go home</button>
          <button className="continue-button" onClick={onStay}>Stay in room</button>
        </div>
      </div>
    </div>
  );
}

function Shell({ children }: { children: React.ReactNode }) {
  return <div className="app-shell"><div className="shell-glow" />{children}</div>;
}

function LoadingRoom({ code, connected }: { code: string; connected: boolean }) {
  return <main className="screen loading"><div className="spinner" /><h2>{connected ? "Opening your room" : "Connecting"}</h2><p>Room {code}</p></main>;
}

function FullRoom({ code }: { code: string }) {
  return <main className="screen loading"><Logo /><h2>This room is full.</h2><p>Room {code} already has {MAX_MEMBERS} people.</p><a href="/">Create another room</a></main>;
}

function Avatar({ name }: { name?: string }) {
  return <div className="avatar">{name ? name.slice(0, 1).toUpperCase() : "+"}</div>;
}

function Confetti() {
  return (
    <div className="confetti" aria-hidden="true">
      {Array.from({ length: 52 }, (_, index) => <i key={index} style={{ "--i": index, "--x": `${(index * 37) % 100}%`, "--delay": `${-(index % 13) * 0.17}s`, "--duration": `${2.4 + (index % 7) * 0.16}s` } as React.CSSProperties} />)}
    </div>
  );
}

function Logo() {
  return <svg className="showmate-logo" viewBox="0 0 48 42" aria-hidden="true"><rect className="logo-card-back" x="5" y="4" width="26" height="32" rx="7" transform="rotate(-9 18 20)" /><rect className="logo-card-front" x="17" y="6" width="26" height="32" rx="7" transform="rotate(8 30 22)" /><path className="logo-heart" d="M30 29s-8-4.7-8-10a4.7 4.7 0 0 1 8-3.4 4.7 4.7 0 0 1 8 3.4c0 5.3-8 10-8 10Z" /></svg>;
}
function Arrow() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" /></svg>; }
function Heart() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.7l-1.1-1.1a5.5 5.5 0 0 0-7.8 7.8l1.1 1.1L12 21l7.7-7.5 1.1-1.1a5.5 5.5 0 0 0 0-7.8Z" /></svg>; }
function Close() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m6 6 12 12M18 6 6 18" /></svg>; }
function Copy() { return <svg viewBox="0 0 24 24" aria-hidden="true"><rect x="8" y="8" width="11" height="11" rx="2" /><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2" /></svg>; }
function Spark() { return <svg viewBox="0 0 24 24" aria-hidden="true"><path d="m12 2 1.7 6.3L20 10l-6.3 1.7L12 18l-1.7-6.3L4 10l6.3-1.7L12 2Z" /><path d="m19 16 .7 2.3L22 19l-2.3.7L19 22l-.7-2.3L16 19l2.3-.7L19 16Z" /></svg>; }

const posterPreloads = new Set<string>();

function posterAssetUrl(showId: string, size: "thumbnail" | "full"): string {
  return `/api/posters/${showId}?size=${size}`;
}

function preloadImage(url: string, priority: "high" | "low") {
  if (posterPreloads.has(url)) return;
  posterPreloads.add(url);
  const image = new Image();
  image.decoding = "async";
  image.fetchPriority = priority;
  image.src = url;
}

let matchAudioContext: AudioContext | undefined;

function primeMatchSound() {
  const AudioContextClass = window.AudioContext ?? (window as typeof window & { webkitAudioContext?: typeof AudioContext }).webkitAudioContext;
  if (!AudioContextClass) return;
  matchAudioContext ??= new AudioContextClass();
  if (matchAudioContext.state === "suspended") void matchAudioContext.resume();
}

function playMatchSound() {
  primeMatchSound();
  const context = matchAudioContext;
  if (!context) return;
  const notes = [523.25, 659.25, 783.99, 1046.5];
  notes.forEach((frequency, index) => {
    const oscillator = context.createOscillator();
    const gain = context.createGain();
    const startsAt = context.currentTime + index * 0.09;
    oscillator.type = "sine";
    oscillator.frequency.setValueAtTime(frequency, startsAt);
    gain.gain.setValueAtTime(0.0001, startsAt);
    gain.gain.exponentialRampToValueAtTime(0.16, startsAt + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.0001, startsAt + 0.28);
    oscillator.connect(gain).connect(context.destination);
    oscillator.start(startsAt);
    oscillator.stop(startsAt + 0.3);
  });
  window.setTimeout(() => {
    void context.close();
    matchAudioContext = undefined;
  }, 1000);
}

function send(socket: PartySocket, message: ClientMessage) { socket.send(JSON.stringify(message)); }
function validName(name: string) { return name.trim().length >= 2; }
function createMemberId() { return crypto.randomUUID().replaceAll("-", ""); }

createRoot(document.getElementById("root")!).render(<StrictMode><App /></StrictMode>);
