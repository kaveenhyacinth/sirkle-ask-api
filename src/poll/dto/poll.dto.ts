export interface PollOptionDto {
  _id: number;
  value: string;
}

export interface PollDto {
  _id: string;
  question: string;
  description: string;
  options: PollOptionDto[];
  createdBy: string;
}
