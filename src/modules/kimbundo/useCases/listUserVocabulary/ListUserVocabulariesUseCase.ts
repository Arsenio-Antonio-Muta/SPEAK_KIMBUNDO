import { inject, injectable } from "tsyringe";
import { Learning_Vocabulary } from "../../entities/Learning_Vocabulary";
import { ILearningVocabularyRepository } from "../../repositories/ILearningVocabularyRepository";


@injectable()
class ListUserVocabulariesUseCase {
  constructor(
    @inject("LearningVocabularyRepository")
    private learningVocabularyRepository: ILearningVocabularyRepository
  ) { }

  async execute(user_id: string): Promise<Learning_Vocabulary[]> {
    const vocabulariesUser = await this.learningVocabularyRepository.listUserVocabularies(user_id);

    return vocabulariesUser;
  }
}

export { ListUserVocabulariesUseCase }