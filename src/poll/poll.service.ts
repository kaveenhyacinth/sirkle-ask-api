import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { PollDocument } from './schema/poll.schema';
import { CreatePollDto } from './dto/create-poll.dto';

@Injectable()
export class PollService {
  constructor(@InjectModel('Poll') private pollModel: Model<PollDocument>) {}

  async create(createPollDto: CreatePollDto): Promise<any> {
    const createdPoll = new this.pollModel(createPollDto);
    return createdPoll.save();
  }

  async findAll() {
    return await this.pollModel.find().exec();
  }

  async findOneById(id: string) {
    return await this.pollModel.findOne({ _id: id }).exec();
  }
}
