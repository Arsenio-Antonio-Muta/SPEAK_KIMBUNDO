import { Vocabulary } from "../infra/typeorm/entities/Vocabulary";

interface ICreateVocabularyDTO {
  word: string;
}

interface IVocabulariesRepository {
  create({ word }: ICreateVocabularyDTO): Promise<void>;
  list(): Promise<Vocabulary[]>;
  findByVocabulary(word: string): Promise<Vocabulary>
}

export { IVocabulariesRepository, ICreateVocabularyDTO }