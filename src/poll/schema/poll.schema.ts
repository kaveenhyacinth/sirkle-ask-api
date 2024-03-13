import { HydratedDocument } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

export type PollDocument = HydratedDocument<Poll>;

@Schema()
export class Poll {
  @Prop()
  question: string;

  @Prop()
  description?: string;

  @Prop()
  options: any[];

  @Prop()
  createdBy: string;

  @Prop()
  createAt: Date;
}

export const PollSchema = SchemaFactory.createForClass(Poll);
