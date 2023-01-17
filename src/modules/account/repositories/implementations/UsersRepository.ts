import { User } from "../../entities/User";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";
import { getRepository, Repository } from "typeorm";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>

  constructor() {
    this.repository = getRepository(User);
  }

  async create({ first_name, last_name, email, password, avatar, id }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({ first_name, last_name, email, password, avatar, id });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<User> {
    const userEmail = await this.repository.findOne({ email });

    return userEmail;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }

  async findVocabulariesUser(user_id: string): Promise<User[]> {
    const vocabulariesUser = await this.repository.find({
      where: {
        id: user_id
      },
      relations: ["learning_vocabulary"]
    })

    return vocabulariesUser
  }
}

export { UsersRepository }