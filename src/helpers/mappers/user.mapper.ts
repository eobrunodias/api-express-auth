import { UserInstance } from "../../models/user-model";
import { CreateUserDTO } from "../../dto/users/create-user.dto";

export class UserMapper {
  static toResponse(user: UserInstance): CreateUserDTO {
    return {
      id: user.id,
      name: user.title,
      email: user.description,
      password: user.password,
    };
  }

  static toResponseList(tasks: UserInstance[]): CreateUserDTO[] {
    return tasks.map((task) => this.toResponse(task));
  }
}
