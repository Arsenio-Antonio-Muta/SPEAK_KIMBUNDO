import { Example } from "../entities/Example";

interface ICreateExampleDTO {
  example: string;
  vocabularyId: string;
}

interface IExamplesVocabularyRepository {
  create({ example, vocabularyId }: ICreateExampleDTO): Promise<Example>;
}

export { IExamplesVocabularyRepository, ICreateExampleDTO }