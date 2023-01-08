import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateExamplesVocabularyUseCase } from "./CreateExamplesVocabularyUseCase";


class CreateExamplesVocabularyController {

  async handle(request: Request, response: Response): Promise<Response> {
    const { example, vocabularyId } = request.body;

    const createExampleVocabularyUseCase = container.resolve(CreateExamplesVocabularyUseCase);

    const vocabularyExample = await createExampleVocabularyUseCase.execute({ example, vocabularyId });

    return response.status(201).json(vocabularyExample);
  }
}

export { CreateExamplesVocabularyController }