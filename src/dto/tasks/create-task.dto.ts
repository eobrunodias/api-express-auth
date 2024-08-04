export interface CreateTaskDTO {
  title: string;
  description: string;
  done: boolean;
  initDate?: Date;
  endDate?: Date;
}
