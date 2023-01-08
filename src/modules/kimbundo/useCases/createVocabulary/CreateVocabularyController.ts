import { container } from "tsyringe";
import { Request, Response } from "express";
import { CreateVocabularyUseCase } from "./CreateVocabularyUseCase";


class CreateVocabularyController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { word } = request.body;

    const createVocabularyUseCase = container.resolve(CreateVocabularyUseCase);

    await createVocabularyUseCase.execute({ word });

    return response.status(201).send();
  }
}

export { CreateVocabularyController }