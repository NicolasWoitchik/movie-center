import { PaginationResponse } from "src/shared/dtos/PaginationResponse.dto";
import { Movie } from "../schemas/movie.schema";

export interface IMoviesRepository {
  countAll(): Promise<number>;
  findMovies(limit: number, offset: number): Promise<PaginationResponse<Movie[]>>;
  insertMany(movies: Movie[]): Promise<void>;
  create(movie: Partial<Movie>): Promise<Movie>;
}