import { getRepository, Repository } from "typeorm";
import { Vocabulary } from "../../entities/Vocabulary";
import { ICreateVocabularyDTO, IVocabulariesRepository } from "../IVocabulariesRepository";


class VocabulariesRepository implements IVocabulariesRepository {
  private repository: Repository<Vocabulary>;

  constructor() {
    this.repository = getRepository(Vocabulary);
  }

  async create({ word }: ICreateVocabularyDTO): Promise<void> {
    const vocabulary = this.repository.create({ word });

    await this.repository.save(vocabulary);
  }

  async list(): Promise<Vocabulary[]> {
    const findAllVocabularies = await this.repository.find({
      relations: ["meaning", "examples"]
    });

    return findAllVocabularies;
  }

  async findByVocabulary(word: string): Promise<Vocabulary> {
    const findOneWord = this.repository.findOne(word);

    return findOneWord;
  }

}

export { VocabulariesRepository }