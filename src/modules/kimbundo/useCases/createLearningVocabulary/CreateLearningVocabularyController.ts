import { Request, Response } from "express"
import { container } from "tsyringe";
import { CreateLearningVocabularyUseCase } from "./CreateLearningVocabularyUseCase";


class CreateLearningVocabularyController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId, vocabularyId } = request.body;

    const createLearningVocabularyUseCase = container.resolve(CreateLearningVocabularyUseCase);

    await createLearningVocabularyUseCase.execute({ userId, vocabularyId });

    return response.status(201).send();
  }
}

export { CreateLearningVocabularyController }