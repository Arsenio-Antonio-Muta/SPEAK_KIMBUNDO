import { getRepository, Repository } from "typeorm";
import { Learning_Vocabulary } from "../../entities/Learning_Vocabulary";
import { Vocabulary } from "../../entities/Vocabulary";
import { ICreateLearnVocabulary, ILearningVocabularyRepository } from "../ILearningVocabularyRepository";



class LearningVocabularyRepository implements ILearningVocabularyRepository {
  private repository: Repository<Learning_Vocabulary>

  constructor() {
    this.repository = getRepository(Learning_Vocabulary);
  }

  async create({ userId, vocabularyId }: ICreateLearnVocabulary): Promise<void> {
    const vocabularyLearning = this.repository.create({ user: { id: userId }, vocabulary: { id: vocabularyId } });

    await this.repository.save(vocabularyLearning);
  }

  async listUserVocabularies(userId: string): Promise<Learning_Vocabulary[]> {
    const vocabularies = this.repository.find({
      where: {
        id: userId
      }
    })

    return vocabularies;
  }

}

export { LearningVocabularyRepository }