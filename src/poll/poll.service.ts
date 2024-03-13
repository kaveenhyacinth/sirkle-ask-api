import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PollDocument } from './schema/poll.schema';
import { CreatePollDto } from './dto/create-poll.dto';

@Injectable()
export class PollService {
  constructor(@InjectModel('Poll') private pollModel: Model<PollDocument>) {}

  async create(createPollDto: CreatePollDto): Promise<PollDocument> {
    const createdPoll = new this.pollModel(createPollDto);
    return createdPoll.save();
  }

  async findAll(): Promise<PollDocument[]> {
    return await this.pollModel.find().exec();
  }

  async findOneById(id: string): Promise<PollDocument> {
    return await this.pollModel.findOne({ _id: id }).exec();
  }
}
