import { describe, expect, it } from "vitest";
import { posterSourceUrl } from "../src/shared/posters";
import type { Show } from "../src/shared/types";

const base: Omit<Show, "posterUrl"> = {
  id: "sample",
  title: "Sample",
  year: 2024,
  platform: "netflix",
  mediaType: "tv",
  genres: ["Drama"],
  runtime: 45,
  rating: 8,
  synopsis: "A sample title.",
  popularity: 90,
  accent: "#df4c42",
  watchUrl: "https://www.netflix.com/",
};

describe("posterSourceUrl", () => {
  it("maps TMDB posters to sized CDN paths", () => {
    const show = { ...base, posterUrl: "https://image.tmdb.org/t/p/original/abc123.jpg" };
    expect(posterSourceUrl(show, "thumbnail")).toBe("https://image.tmdb.org/t/p/w342/abc123.jpg");
    expect(posterSourceUrl(show, "full")).toBe("https://image.tmdb.org/t/p/w780/abc123.jpg");
  });

  it("maps TVmaze originals to medium portraits for thumbnails", () => {
    const show = {
      ...base,
      posterUrl: "https://static.tvmaze.com/uploads/images/original_untouched/1/1.jpg",
    };
    expect(posterSourceUrl(show, "thumbnail")).toContain("/medium_portrait/");
    expect(posterSourceUrl(show, "full")).toContain("/original_untouched/");
  });
});
