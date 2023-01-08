import { Request, Response } from "express"
import { container } from "tsyringe";
import { CreateAuthenticateUserUseCase } from "./CreateAuthenticateUserUseCase";


class CreateAuthenticateUserController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const createAuthenticateUserUseCase = container.resolve(CreateAuthenticateUserUseCase);

    const token = await createAuthenticateUserUseCase.execute({ email, password });

    return response.status(201).json(token);
  }
}

export { CreateAuthenticateUserController }