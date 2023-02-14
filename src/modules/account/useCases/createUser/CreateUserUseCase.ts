import { hash } from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/errors/AppError";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
}

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ first_name, last_name, email, password }: IRequest): Promise<void> {
    console.log(password);
    const verifyIfUserAlreadyExist = await this.usersRepository.findByEmail(email);

    if (verifyIfUserAlreadyExist) {
      throw new AppError("This E-mail already exists");
    }

    const passwordHash = await hash(password, 8);

    await this.usersRepository.create({ first_name, last_name, email, password: passwordHash })
  }
}

export { CreateUserUseCase }