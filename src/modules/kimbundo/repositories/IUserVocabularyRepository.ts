import { Learning_Vocabulary } from "../infra/typeorm/entities/Learning_Vocabulary";

interface ICreateLearnVocabulary {
  userId: string;
  vocabularyId: string;
}

interface IUserVocabularyRepository {
  create({ userId, vocabularyId }: ICreateLearnVocabulary): Promise<void>;
}

export { IUserVocabularyRepository, ICreateLearnVocabulary }