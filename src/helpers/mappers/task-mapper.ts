import { TaskInstance } from "../../models/task-model";
import { CreateTaskDTO } from "../../dto/tasks/create-task.dto";

export class TaskMapper {
  static toResponse(task: TaskInstance): CreateTaskDTO {
    return {
      title: task.title,
      description: task.description,
      done: task.done,
      initDate: task.initDate,
      endDate: task.endDate,
    };
  }

  static toResponseList(tasks: TaskInstance[]): CreateTaskDTO[] {
    return tasks.map((task) => this.toResponse(task));
  }
}
