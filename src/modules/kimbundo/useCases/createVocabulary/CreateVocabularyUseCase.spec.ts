import { AppError } from "../../../../errors/AppError";
import { VocabulariesRepositoryInMemory } from "../../repositories/in-memory/VocabulariesRepositoryInMemory";
import { CreateVocabularyUseCase } from "./CreateVocabularyUseCase"


let createVocabularyUseCase: CreateVocabularyUseCase;
let vocabulariesRepositoryInMemory: VocabulariesRepositoryInMemory;

describe("Create new vocabulary", () => {
  beforeEach(() => {
    vocabulariesRepositoryInMemory = new VocabulariesRepositoryInMemory();
    createVocabularyUseCase = new CreateVocabularyUseCase(vocabulariesRepositoryInMemory);
  });

  it("Should be able to create new vocabulary", async () => {
    const vocabulary = {
      word: "test word"
    }

    await createVocabularyUseCase.execute(vocabulary);

    const vocabularyCreated = await vocabulariesRepositoryInMemory.findByVocabulary(vocabulary.word);

    expect(vocabularyCreated).toHaveProperty("id");
  });

  it("Should not be able to create one vocabulary two times", async () => {
    expect(async () => {
      const vocabulary = {
        word: "test2 word"
      }

      await createVocabularyUseCase.execute(vocabulary);
      await createVocabularyUseCase.execute(vocabulary)
    }).rejects.toBeInstanceOf(AppError);
  })
})