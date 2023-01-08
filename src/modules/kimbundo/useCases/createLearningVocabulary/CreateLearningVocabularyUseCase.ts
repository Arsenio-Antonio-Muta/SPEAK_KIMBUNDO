import { inject, injectable } from "tsyringe";
import { ILearningVocabularyRepository } from "../../repositories/ILearningVocabularyRepository";

interface IRequest {
  userId: string;
  vocabularyId: string;
}

@injectable()
class CreateLearningVocabularyUseCase {
  constructor(
    @inject("LearningVocabularyRepository")
    private learningVocabularyRepository: ILearningVocabularyRepository
  ) { }

  async execute({ userId, vocabularyId }: IRequest): Promise<void> {
    await this.learningVocabularyRepository.create({ userId, vocabularyId });
  }
}

export { CreateLearningVocabularyUseCase }