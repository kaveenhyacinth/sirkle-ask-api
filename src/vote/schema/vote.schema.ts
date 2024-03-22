import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { Poll } from '../../poll/schema/poll.schema';
import { User } from '../../user/schema/user.schema';

export type VoteDocument = HydratedDocument<Vote>;

@Schema({ timestamps: true })
export class Vote {
  @Prop({ type: Types.ObjectId, ref: 'Poll' })
  pollId: Poll;

  @Prop({ type: Types.ObjectId })
  optionId: string;

  @Prop({ type: Types.ObjectId, ref: 'User' })
  author: User;

  @Prop()
  createdAt?: Date;
}

export const VoteSchema = SchemaFactory.createForClass(Vote);
