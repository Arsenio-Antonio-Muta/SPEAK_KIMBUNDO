import { Vocabulary } from "../entities/Vocabulary";

interface ICreateVocabularyDTO {
  word: string;
}

interface IVocabulariesRepository {
  create({ word }: ICreateVocabularyDTO): Promise<void>;
  list(): Promise<Vocabulary[]>;
  findByVocabulary(vocabulary: string): Promise<Vocabulary>
}

export { IVocabulariesRepository, ICreateVocabularyDTO }