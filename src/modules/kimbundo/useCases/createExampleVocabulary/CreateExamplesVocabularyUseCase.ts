import { inject, injectable } from "tsyringe";
import { Example } from "../../entities/Example";
import { IExamplesVocabularyRepository } from "../../repositories/IExamplesVocabularyRepository";

interface IRequest {
  example: string;
  vocabularyId: string;
}

@injectable()
class CreateExamplesVocabularyUseCase {
  constructor(
    @inject("ExamplesVocabularyRepository")
    private examplesVocabularyRepository: IExamplesVocabularyRepository
  ) { }

  async execute({ example, vocabularyId }: IRequest): Promise<Example> {
    return await this.examplesVocabularyRepository.create({ example, vocabularyId });
  }
}

export { CreateExamplesVocabularyUseCase }