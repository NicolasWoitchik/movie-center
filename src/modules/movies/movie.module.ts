import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MovieController } from './controllers/movie.controller';
import { MoviesRepository } from './repositories/implementations/Movies.repository';
import { Movie, MovieSchema } from './schemas/movie.schema';
import { MovieService } from './services/movie.service';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: 'MovieModel',
        schema: MovieSchema
      }
    ]),
    HttpModule
  ],
  controllers: [MovieController],
  providers: [
    MovieService,
    { provide: 'MoviesRepository', useClass: MoviesRepository },
  ],
})
export class MoviesModule { }
