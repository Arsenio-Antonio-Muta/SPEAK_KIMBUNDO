import { Learning_Vocabulary } from "../entities/Learning_Vocabulary";

interface ICreateLearnVocabulary {
  userId: string;
  vocabularyId: string;
}

interface IUserVocabularyRepository {
  create({ userId, vocabularyId }: ICreateLearnVocabulary): Promise<void>;
  listUserVocabularies(userId: string): Promise<Learning_Vocabulary[]>;
}

export { IUserVocabularyRepository, ICreateLearnVocabulary }