import { inject, injectable } from "tsyringe";
import { User } from "../../entities/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

@injectable()
class ListVocabulariesUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ user_id }: IRequest): Promise<User[]> {
    const vocabulariesUser = await this.usersRepository.findVocabulariesUser(user_id);

    return vocabulariesUser;
  }
}

export { ListVocabulariesUserUseCase }