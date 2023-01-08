import { inject, injectable } from "tsyringe";
import { Vocabulary } from "../../entities/Vocabulary";
import { IVocabulariesRepository } from "../../repositories/IVocabulariesRepository";

@injectable()
class ListVocabulariesUseCase {
  constructor(
    @inject("VocabulariesRepository")
    private vocabulariesRepository: IVocabulariesRepository
  ) { }

  async execute(): Promise<Vocabulary[]> {
    const allVocabularies = await this.vocabulariesRepository.list();

    return allVocabularies;
  }
}

export { ListVocabulariesUseCase }