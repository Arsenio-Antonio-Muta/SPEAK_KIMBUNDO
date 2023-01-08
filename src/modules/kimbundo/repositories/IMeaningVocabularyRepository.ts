
interface ICreateMeaningDTO {
  meaning: string;
  vocabularyId: string;
}

interface IMeaningVocabularyRepository {
  create({ meaning, vocabularyId }: ICreateMeaningDTO): Promise<void>;
}

export { ICreateMeaningDTO, IMeaningVocabularyRepository }