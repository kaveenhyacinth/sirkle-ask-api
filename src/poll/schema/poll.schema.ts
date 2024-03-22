import { HydratedDocument, Types } from 'mongoose';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { PollOptionDto } from '../dto/poll.dto';
import { User } from '../../user/schema/user.schema';

const MONTH = 1000 * 60 * 60 * 24 * 30;

export type PollDocument = HydratedDocument<Poll>;
export type PollStatus = 'active' | 'expired' | 'deleted';

@Schema({ timestamps: true })
export class Poll {
  @Prop()
  question: string;

  @Prop()
  description?: string;

  @Prop()
  options: PollOptionDto[];

  @Prop({ type: Types.ObjectId, ref: 'User' })
  author: User;

  @Prop({ type: Boolean, default: false })
  isPrivate: boolean;

  @Prop({ ype: Date, default: Date.now() + MONTH })
  expiresAt: Date;

  @Prop({ enum: ['active', 'expired', 'deleted'], default: 'active' })
  status: PollStatus;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;
}

export const PollSchema = SchemaFactory.createForClass(Poll);
