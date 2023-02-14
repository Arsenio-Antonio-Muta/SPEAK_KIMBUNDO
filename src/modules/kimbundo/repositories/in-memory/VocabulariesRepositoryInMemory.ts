import { Vocabulary } from "../../infra/typeorm/entities/Vocabulary";
import { ICreateVocabularyDTO, IVocabulariesRepository } from "../IVocabulariesRepository";



class VocabulariesRepositoryInMemory implements IVocabulariesRepository {
  private vocabularies: Vocabulary[] = [];

  async create({ word }: ICreateVocabularyDTO): Promise<void> {
    const vocabulary = new Vocabulary();

    Object.assign(vocabulary, {
      word
    });

    this.vocabularies.push(vocabulary);
  }

  async list(): Promise<Vocabulary[]> {
    const listVocabularies = this.vocabularies;

    return listVocabularies;
  }

  async findByVocabulary(word: string): Promise<Vocabulary> {
    const findVocabulary = this.vocabularies.find((vocabulary) => vocabulary.word === word);

    return findVocabulary;
  }

}

export { VocabulariesRepositoryInMemory }