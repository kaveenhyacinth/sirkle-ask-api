import { Controller, Get, Param } from '@nestjs/common';
import { PollService } from './poll.service';

@Controller('polls')
export class PollController {
  constructor(private pollService: PollService) {}

  @Get()
  getPolls() {
    return this.pollService.getPolls();
  }

  @Get(':id')
  getPollById(@Param('id') id: string) {
    return this.pollService.getPollById(id);
  }
}
