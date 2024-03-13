import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PollOptionDto } from '../dto/poll.dto';

export type PollDocument = HydratedDocument<Poll>;

@Schema({ timestamps: true })
export class Poll {
  @Prop()
  question: string;

  @Prop()
  description?: string;

  @Prop([{ _id: Number, value: String }])
  options: PollOptionDto[];

  @Prop()
  createdBy?: string;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;
}

export const PollSchema = SchemaFactory.createForClass(Poll);
