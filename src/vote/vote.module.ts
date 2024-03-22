import { Module } from '@nestjs/common';
import { VoteController } from './vote.controller';
import { VoteService } from './vote.service';
import { MongooseModule } from '@nestjs/mongoose';
import { VoteSchema } from './schema/vote.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Vote', schema: VoteSchema }])],
  controllers: [VoteController],
  providers: [VoteService],
})
export class VoteModule {}
