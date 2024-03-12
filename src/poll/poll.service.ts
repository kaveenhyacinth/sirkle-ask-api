import { Injectable } from '@nestjs/common';

import * as fs from 'fs';
import * as path from 'path';

@Injectable()
export class PollService {
  getData() {
    const filePath = path.join(__dirname, '../../mocks/sirkl-ask.json');
    const jsonData = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    return jsonData;
  }

  getPolls() {
    const data = this.getData();
    return Object.values(data.polls);
  }

  getPollById(id: string) {
    const data = this.getData();
    return data.polls[id];
  }
}
