import { User } from "../entities/User";

interface ICreateUserDTO {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  avatar?: string;
  id?: string;
}

interface IUsersRepository {
  create({ first_name, last_name, email, password, avatar, id }: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  findVocabulariesUser(user_id: string): Promise<User[]>
}

export { ICreateUserDTO, IUsersRepository }