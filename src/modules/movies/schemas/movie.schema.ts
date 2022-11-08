import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type MovieDocument = HydratedDocument<Movie>;

@Schema({
  collection: 'movies',
})
export class Movie {
  @Prop({ required: true })
  title: string

  @Prop({ required: true })
  original_title: string

  @Prop({ required: true })
  description: string

  @Prop({ required: true })
  release_date: string

  @Prop({ required: true })
  score: string
}

export const MovieSchema = SchemaFactory.createForClass(Movie);