import { Request, Response } from "express"
import { container } from "tsyringe";
import { ListVocabulariesUseCase } from "./ListVocabulariesUseCase";



class ListVocabulariesController {

  async handle(request: Request, response: Response): Promise<Response> {

    const listVocabulariesUseCase = container.resolve(ListVocabulariesUseCase)

    const listAllVocabularies = await listVocabulariesUseCase.execute();

    return response.status(201).json(listAllVocabularies);
  }
}

export { ListVocabulariesController }