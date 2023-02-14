import { getRepository, Repository } from "typeorm";
import { Meaning } from "../../infra/typeorm/entities/Meaning";
import { ICreateMeaningDTO, IMeaningVocabularyRepository } from "../IMeaningVocabularyRepository";



class MeaningVocabularyRepository implements IMeaningVocabularyRepository {
  private repository: Repository<Meaning>;

  constructor() {
    this.repository = getRepository(Meaning);
  }

  async create({ meaning, vocabularyId }: ICreateMeaningDTO): Promise<void> {
    const vocabularyMeaning = this.repository.create({ meaning, vocabulary: { id: vocabularyId } });

    await this.repository.save(vocabularyMeaning);
  }

}

export { MeaningVocabularyRepository }