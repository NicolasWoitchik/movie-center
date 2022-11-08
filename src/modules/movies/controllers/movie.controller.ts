import { Controller, Get, Query } from '@nestjs/common';
import { PaginationResponse } from 'src/shared/dtos/PaginationResponse.dto';
import { Movie } from '../schemas/movie.schema';
import { MovieService } from '../services/movie.service';

@Controller('movies')
export class MovieController {
  constructor(
    private readonly movieService: MovieService
  ) { }

  @Get()
  getList(
    @Query('limit') limit: number = 10,
    @Query('offset') offset: number = 0
  ): Promise<PaginationResponse<Movie[]>> {
    return this.movieService.findMovies(limit, offset);
  }
}
