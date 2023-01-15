import { getRepository, Repository } from "typeorm";
import { Learning_Vocabulary } from "../../entities/Learning_Vocabulary";
import { Vocabulary } from "../../entities/Vocabulary";
import { ICreateLearnVocabulary, IUserVocabularyRepository, } from "../IUserVocabularyRepository";

class UserVocabularyRepository implements IUserVocabularyRepository {
  private repository: Repository<Learning_Vocabulary>

  constructor() {
    this.repository = getRepository(Learning_Vocabulary);
  }

  async create({ userId, vocabularyId }: ICreateLearnVocabulary): Promise<void> {
    const vocabularyLearning = this.repository.create({ user: { id: userId }, vocabulary: { id: vocabularyId } });

    await this.repository.save(vocabularyLearning);
  }

  async listUserVocabularies(userId: string): Promise<Learning_Vocabulary[]> {
    const vocabulariesUser = this.repository.find({
      where: {
        id: userId
      }
    })

    return vocabulariesUser;
  }

}

export { UserVocabularyRepository }