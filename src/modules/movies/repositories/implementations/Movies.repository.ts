import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { PaginationResponse } from "src/shared/dtos/PaginationResponse.dto";
import { MovieDTO } from "../../dtos/movie.dto";
import { Movie } from "../../schemas/movie.schema";
import { IMoviesRepository } from "../IMovies.repository";

export class MoviesRepository implements IMoviesRepository {
  constructor(
    @InjectModel('MovieModel')
    private movieRepository: Model<Movie>,
  ) { }

  async countAll(): Promise<number> {
    const count = await this.movieRepository.countDocuments();

    return count
  }

  async findMovies(limit: number, offset: number): Promise<PaginationResponse<Movie[]>> {
    const movies = await this.movieRepository.find({}, null, {
      limit,
      skip: offset,
      sort: {
        release_date: -1
      }
    }).exec();

    return {
      total: movies.length,
      results: movies
    }
  }

  async create(movie: Partial<Movie>): Promise<Movie> {
    return this.movieRepository.create(movie);
  }

  async insertMany(moviesDto: Movie[]): Promise<void> {
    await this.movieRepository.insertMany(moviesDto)
  }
}