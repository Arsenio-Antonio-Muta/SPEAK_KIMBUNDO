import { Request, Response } from "express"
import { container } from "tsyringe";
import { CreateUserVocabularyUseCase } from "./CreateLearningVocabularyUseCase";


class CreateLearningVocabularyController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { userId, vocabularyId } = request.body;

    const createLearningVocabularyUseCase = container.resolve(CreateUserVocabularyUseCase);

    await createLearningVocabularyUseCase.execute({ userId, vocabularyId });

    return response.status(201).send();
  }
}

export { CreateLearningVocabularyController }