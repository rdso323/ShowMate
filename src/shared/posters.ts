import type { Show } from "./types";

export function posterSourceUrl(show: Show, size: "thumbnail" | "full"): string {
  const url = show.posterUrl;
  if (url.includes("image.tmdb.org")) {
    const path = url.replace(/^https?:\/\/image\.tmdb\.org\/t\/p\/[^/]+\//, "");
    const width = size === "thumbnail" ? "w342" : "w780";
    return `https://image.tmdb.org/t/p/${width}/${path.replace(/^\//, "")}`;
  }
  if (url.includes("tvmaze.com") && size === "thumbnail") {
    return url.replace("/original_untouched/", "/medium_portrait/");
  }
  return url;
}
