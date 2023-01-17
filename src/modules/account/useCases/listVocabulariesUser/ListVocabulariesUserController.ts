import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListVocabulariesUserUseCase } from "./ListVocabulariesUserUseCase";


class ListVocabulariesUserController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listVocabulariesUserUseCase = container.resolve(ListVocabulariesUserUseCase);

    const vocabulariesUser = await listVocabulariesUserUseCase.execute({ user_id: id })

    return response.status(201).json(vocabulariesUser)
  }
}

export { ListVocabulariesUserController }