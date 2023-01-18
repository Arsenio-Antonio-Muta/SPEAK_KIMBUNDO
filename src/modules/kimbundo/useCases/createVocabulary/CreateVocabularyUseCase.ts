import { AppError } from "../../../../errors/AppError";
import { inject, injectable } from "tsyringe";
import { IVocabulariesRepository } from "../../repositories/IVocabulariesRepository";

interface IRequest {
  word: string;
}

@injectable()
class CreateVocabularyUseCase {
  constructor(
    @inject("VocabulariesRepository")
    private vocabulariesRepository: IVocabulariesRepository) { }

  async execute({ word }: IRequest): Promise<void> {
    const vocabularyAlreadyExists = await this.vocabulariesRepository.findByVocabulary(word);

    if (vocabularyAlreadyExists) {
      throw new AppError("This vocabulary already exits")
    }

    await this.vocabulariesRepository.create({ word });
  }
}

export { CreateVocabularyUseCase }