import { inject, injectable } from "tsyringe";
import { IUserVocabularyRepository } from "../../repositories/IUserVocabularyRepository";

interface IRequest {
  userId: string;
  vocabularyId: string;
}

@injectable()
class CreateUserVocabularyUseCase {
  constructor(
    @inject("LearningVocabularyRepository")
    private userVocabularyRepository: IUserVocabularyRepository
  ) { }

  async execute({ userId, vocabularyId }: IRequest): Promise<void> {
    await this.userVocabularyRepository.create({ userId, vocabularyId });
  }
}

export { CreateUserVocabularyUseCase }