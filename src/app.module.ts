import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { MoviesModule } from './modules/movies/movie.module';

@Module({
  imports: [
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        uri: `mongodb://${configService.get('MONGO_USERNAME')
          }:${configService.get('MONGO_PASSWORD')
          }@${configService.get('MONGO_HOST')
          }:${configService.get('MONGO_PORT')
          }/${configService.get('MONGO_DB_DATABASE')
          }`,
      }),
      inject: [ConfigService],
    }),
    MoviesModule
  ],
})
export class AppModule { }
