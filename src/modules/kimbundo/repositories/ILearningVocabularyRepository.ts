import { Learning_Vocabulary } from "../entities/Learning_Vocabulary";

interface ICreateLearnVocabulary {
  userId: string;
  vocabularyId: string;
}

interface ILearningVocabularyRepository {
  create({ userId, vocabularyId }: ICreateLearnVocabulary): Promise<void>;
  userVocabularies(userId: string): Promise<Learning_Vocabulary[]>;
}

export { ILearningVocabularyRepository, ICreateLearnVocabulary }