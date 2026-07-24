import { afterEach, describe, expect, it, vi } from "vitest";
import { filterShowsWithReachablePosters, toShow } from "../src/worker/tmdb-sync";
import type { Show } from "../src/shared/types";

const baseItem = {
  id: 42,
  title: "Cover Guard",
  overview: "A title used to verify poster filtering.",
  release_date: "2024-01-01",
  vote_average: 7.5,
  popularity: 80,
  genre_ids: [18],
};

describe("toShow poster guards", () => {
  it("builds a TMDB poster URL when poster_path is present", () => {
    const show = toShow({ ...baseItem, poster_path: "/abc123.jpg" }, "movie", "netflix", 90, true);
    expect(show?.posterUrl).toBe("https://image.tmdb.org/t/p/original/abc123.jpg");
  });

  it("drops titles with a missing poster_path", () => {
    expect(toShow({ ...baseItem, poster_path: null }, "movie", "netflix", 90, false)).toBeUndefined();
    expect(toShow({ ...baseItem, poster_path: undefined }, "tv", "max", 90, false)).toBeUndefined();
    expect(toShow({ ...baseItem, poster_path: "" }, "tv", "disney", 90, false)).toBeUndefined();
  });

  it("drops titles with a non-path poster_path", () => {
    expect(toShow({ ...baseItem, poster_path: "null" }, "movie", "prime", 90, false)).toBeUndefined();
    expect(toShow({ ...baseItem, poster_path: "abc123.jpg" }, "movie", "prime", 90, false)).toBeUndefined();
  });
});

describe("filterShowsWithReachablePosters", () => {
  afterEach(() => {
    vi.unstubAllGlobals();
  });

  const show = (id: string, posterUrl: string): Show => ({
    id,
    title: id,
    year: 2024,
    platform: "netflix",
    mediaType: "movie",
    genres: ["Drama"],
    runtime: 110,
    rating: 8,
    synopsis: "Test",
    popularity: 80,
    accent: "#df4c42",
    posterUrl,
    watchUrl: "https://www.netflix.com/",
  });

  it("keeps only shows whose poster fetch returns an image", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async (input: RequestInfo | URL) => {
        const url = String(input);
        if (url.includes("good.jpg")) {
          return new Response(new Uint8Array([1, 2, 3]), {
            status: 200,
            headers: { "content-type": "image/jpeg" },
          });
        }
        return new Response("missing", { status: 404, headers: { "content-type": "text/plain" } });
      }),
    );

    const verified = await filterShowsWithReachablePosters([
      show("good", "https://image.tmdb.org/t/p/original/good.jpg"),
      show("bad", "https://image.tmdb.org/t/p/original/bad.jpg"),
    ]);

    expect(verified.map((item) => item.id)).toEqual(["good"]);
  });
});
