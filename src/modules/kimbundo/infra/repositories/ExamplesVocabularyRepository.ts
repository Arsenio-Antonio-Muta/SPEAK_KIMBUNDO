import { getRepository, Repository } from "typeorm";
import { Example } from "../typeorm/entities/Example";
import { ICreateExampleDTO, IExamplesVocabularyRepository } from "../../repositories/IExamplesVocabularyRepository";


class ExamplesVocabularyRepository implements IExamplesVocabularyRepository {
  private repository: Repository<Example>;

  constructor() {
    this.repository = getRepository(Example);
  }

  async create({ example, vocabularyId }: ICreateExampleDTO): Promise<Example> {
    const createExample = this.repository.create({ example, vocabulary: { id: vocabularyId } });

    const returnExample = await this.repository.save(createExample);

    return returnExample;
  }

}

export { ExamplesVocabularyRepository }