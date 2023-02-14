import { User } from "../../infra/typeorm/entities/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";



class UsersRepositoryInMemory implements IUsersRepository {
  private users: User[] = [];

  async create({ first_name, last_name, email, password, avatar, id }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      first_name,
      last_name,
      email,
      password,
    })

    this.users.push(user);
  }

  async findByEmail(email: string): Promise<User> {
    const findEmail = this.users.find((user) => user.email === email);

    return findEmail;
  }

  async findById(id: string): Promise<User> {
    const findId = this.users.find((user) => user.id === id);

    return findId;
  }

  findVocabulariesUser(user_id: string): Promise<User[]> {
    throw new Error("Method not implemented.");
  }

}

export { UsersRepositoryInMemory }