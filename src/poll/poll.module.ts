import { Module } from '@nestjs/common';
import { PollController } from './poll.controller';
import { PollService } from './poll.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PollSchema } from './schema/poll.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Poll', schema: PollSchema }])],
  controllers: [PollController],
  providers: [PollService],
})
export class PollModule {}
