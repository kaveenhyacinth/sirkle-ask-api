import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type UserDocument = HydratedDocument<User>;
export type UserStatus = 'active' | 'inactive';

@Schema({ timestamps: true })
export class User {
  @Prop()
  username: string;

  @Prop()
  email: string;

  @Prop()
  bio?: string;

  @Prop()
  passwordHash: string;

  @Prop({ type: Number, default: 0, enum: [0, 1, 2] })
  role: number;

  @Prop({ enum: ['active', 'inactive'], default: 'active' })
  status: UserStatus;

  @Prop()
  createdAt?: Date;

  @Prop()
  updatedAt?: Date;
}

export const UserSchema = SchemaFactory.createForClass(User);
