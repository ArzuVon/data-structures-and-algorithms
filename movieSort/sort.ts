import { Movie } from "./movies";

export function sortYear(movies: Movie[]): Movie[] {
  return movies.sort((prev, curr) =>
    prev.year > curr.year ? 1 : curr.year > prev.year ? -1 : 0
  );
}
export function sortTitle(movies: Movie[]): Movie[] {
  let regex: RegExp = /^The\s+/;
  return movies.sort((a: Movie, b: Movie): number =>
    a.title.replace(regex, "").localeCompare(b.title.replace(regex, ""))
  );
}

export function inGenre(movies: Movie[], genre: string): Movie[] {
  return movies.filter((m: Movie) => m.genres.includes(genre));
}