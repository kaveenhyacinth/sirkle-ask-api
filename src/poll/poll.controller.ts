import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { PollService } from './poll.service';
import { CreatePollDto } from './dto/create-poll.dto';

@Controller('polls')
export class PollController {
  constructor(private pollService: PollService) {}

  @Post()
  async create(@Body() createPollDto: CreatePollDto) {
    return await this.pollService.create(createPollDto);
  }

  @Get()
  async findAll() {
    return await this.pollService.findAll();
  }

  @Get(':id')
  findOneById(@Param('id') id: string) {
    return this.pollService.findOneById(id);
  }
}
