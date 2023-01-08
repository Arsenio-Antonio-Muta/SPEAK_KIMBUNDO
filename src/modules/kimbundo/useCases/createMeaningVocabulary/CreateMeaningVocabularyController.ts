import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateMeaningVocabularyUseCase } from "./CreateMeaningVocabularyUseCase";


class CreateMeaningVocabularyController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { meaning, vocabularyId } = request.body;

    const createMeaningVocabularyUseCase = container.resolve(CreateMeaningVocabularyUseCase);

    await createMeaningVocabularyUseCase.execute({ meaning, vocabularyId });

    return response.status(201).send();
  }
}

export { CreateMeaningVocabularyController }