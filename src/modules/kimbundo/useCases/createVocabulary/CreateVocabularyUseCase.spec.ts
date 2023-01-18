import { VocabulariesRepositoryInMemory } from "../../repositories/in-memory/VocabulariesRepositoryInMemory";
import { CreateVocabularyUseCase } from "./CreateVocabularyUseCase";

let createVocabularyUseCase: CreateVocabularyUseCase;
let vocabulariesRepositoryInMemory: VocabulariesRepositoryInMemory;

describe("Create vocabulary", () => {
  beforeEach(() => {
    vocabulariesRepositoryInMemory = new VocabulariesRepositoryInMemory();
    createVocabularyUseCase = new CreateVocabularyUseCase(vocabulariesRepositoryInMemory);
  })

  it("Should be able create vocabulary", async () => {
    const vocabulary = {
      word: "word test"
    }

    await createVocabularyUseCase.execute(vocabulary);

    const vocabularyCreated = await vocabulariesRepositoryInMemory.findByVocabulary(vocabulary.word);

    expect(vocabularyCreated).toHaveProperty("id");
  })
})