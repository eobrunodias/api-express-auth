import { UserInstance } from "../../models/user-model";
import { CreateUserDTO } from "../../dto/users/create-user.dto";

export class UserMapper {
  static toResponse(user: UserInstance): CreateUserDTO {
    return {
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      rule: user.rule,
    };
  }

  static toResponseList(tasks: UserInstance[]): CreateUserDTO[] {
    return tasks.map((task) => this.toResponse(task));
  }
}
