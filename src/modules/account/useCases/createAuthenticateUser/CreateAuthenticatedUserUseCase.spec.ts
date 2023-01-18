import { AppError } from "../../../../errors/AppError";
import { UsersRepositoryInMemory } from "../../repositories/in-memory/UsersRepositoryInMemory";
import { ICreateUserDTO } from "../../repositories/IUsersRepository";
import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { CreateAuthenticateUserUseCase } from "./CreateAuthenticateUserUseCase"


let createAuthenticateUserUseCase: CreateAuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;
describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    createAuthenticateUserUseCase = new CreateAuthenticateUserUseCase(usersRepositoryInMemory);
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("Should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      first_name: "User test",
      last_name: "lastName test",
      email: "test@gmail.com",
      password: "test1234"
    }

    await createUserUseCase.execute(user);

    const result = await createAuthenticateUserUseCase.execute({
      email: user.email,
      password: user.password
    });

    expect(result).toHaveProperty("token");
  })

  it("Should not be able authenticate user when e-mail be wrong", async () => {
    expect(async () => {
      await createAuthenticateUserUseCase.execute({
        email: "false@gmail.com",
        password: "false1234"
      })
    }).rejects.toBeInstanceOf(AppError);
  })

  it("Should not be able authenticate user when password be wrong", async () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        first_name: "user test2",
        last_name: "lastName test2",
        email: "test3@gmail.com",
        password: "123456"
      }

      await createUserUseCase.execute(user);

      await createAuthenticateUserUseCase.execute({
        email: user.email,
        password: "123"
      })
    }).rejects.toBeInstanceOf(AppError)
  })
})