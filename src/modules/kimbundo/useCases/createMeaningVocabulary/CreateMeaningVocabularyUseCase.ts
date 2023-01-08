import { inject, injectable } from "tsyringe";
import { IMeaningVocabularyRepository } from "../../repositories/IMeaningVocabularyRepository";

interface IRequest {
  meaning: string;
  vocabularyId: string;
}

@injectable()
class CreateMeaningVocabularyUseCase {
  constructor(
    @inject("MeaningVocabularyRepository")
    private meaningVocabularyRepository: IMeaningVocabularyRepository
  ) { }

  async execute({ meaning, vocabularyId }: IRequest): Promise<void> {
    await this.meaningVocabularyRepository.create({ meaning, vocabularyId });
  }
}

export { CreateMeaningVocabularyUseCase }