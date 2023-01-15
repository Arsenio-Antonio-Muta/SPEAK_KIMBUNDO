import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListUserVocabulariesUseCase } from "./ListUserVocabulariesUseCase";

class ListUserVocabulariesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listUserVocabulariesUseCase = container.resolve(ListUserVocabulariesUseCase)

    const userVocabularies = await listUserVocabulariesUseCase.execute(id);

    return response.status(201).json(userVocabularies);
  }
}

export { ListUserVocabulariesController }