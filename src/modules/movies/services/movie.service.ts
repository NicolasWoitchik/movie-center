import { HttpService } from '@nestjs/axios';
import { Inject, Injectable, OnModuleInit } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PaginationResponse } from 'src/shared/dtos/PaginationResponse.dto';
import { MovieDTO } from '../dtos/movie.dto';
import { IMoviesRepository } from '../repositories/IMovies.repository';
import { Movie } from '../schemas/movie.schema';

@Injectable()
export class MovieService implements OnModuleInit {
  constructor(
    private configService: ConfigService,
    @Inject('MoviesRepository') private movieRepository: IMoviesRepository,
    private http: HttpService
  ) { }

  findMovies(
    limit: number = 0,
    offset: number = 0
  ): Promise<PaginationResponse<Movie[]>> {
    return this.movieRepository.findMovies(limit, offset)
  }

  async onModuleInit() {
    const getMoivesCount = await this.movieRepository.countAll();

    if (getMoivesCount > 20) return;

    const url = `${this.configService.get('MOVIES_BASE_URL')}/films`

    const moviesResponse = await this.http.axiosRef.get<MovieDTO[]>(url, {
      params: {
        fields: 'title,original_title,description,release_date,rt_score',
        limit: 50
      }
    })

    const movies = await Promise.all(
      moviesResponse.data.map(
        movie => this.movieRepository.create({
          title: movie.title,
          original_title: movie.original_title,
          description: movie.description,
          release_date: movie.release_date,
          score: movie.rt_score,
        })))

    await this.movieRepository.insertMany(movies)
  }
}
