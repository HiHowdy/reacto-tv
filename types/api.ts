export interface IResults {
  page: number;
  results: IResult[];
  total_pages: number;
  total_results: number;
}

export interface IHomeResults extends IResults {
  label: string;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  genres: IGenre[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  tagline?: string;
  name?: string;
  type: 'movie' | 'tv' | 'people';
}
