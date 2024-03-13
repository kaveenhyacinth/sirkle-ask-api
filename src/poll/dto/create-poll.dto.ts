export class CreatePollDto {
  question: string;
  description?: string;
  options: any[];
  createdBy: string;
  createAt: Date;
}
