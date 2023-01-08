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

    await this.vocabulariesRepository.create({ word });
  }
}

export { CreateVocabularyUseCase }