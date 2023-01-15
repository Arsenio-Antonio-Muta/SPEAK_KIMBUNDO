import { inject, injectable } from "tsyringe";
import { Learning_Vocabulary } from "../../entities/Learning_Vocabulary";
import { IUserVocabularyRepository } from "../../repositories/IUserVocabularyRepository";


@injectable()
class ListUserVocabulariesUseCase {
  constructor(
    @inject("UserVocabularyRepository")
    private learningVocabularyRepository: IUserVocabularyRepository
  ) { }

  async execute(user_id: string): Promise<Learning_Vocabulary[]> {
    const vocabulariesUser = await this.learningVocabularyRepository.listUserVocabularies(user_id);

    return vocabulariesUser;
  }
}

export { ListUserVocabulariesUseCase }