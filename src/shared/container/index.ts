import { container } from "tsyringe";
import { UsersRepository } from "../../modules/account/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/account/repositories/IUsersRepository";
import { VocabulariesRepository } from "../../modules/kimbundo/repositories/implementations/VocabulariesRepository";
import { IVocabulariesRepository } from "../../modules/kimbundo/repositories/IVocabulariesRepository";
import { IExamplesVocabularyRepository } from "../../modules/kimbundo/repositories/IExamplesVocabularyRepository";
import { ExamplesVocabularyRepository } from "../../modules/kimbundo/repositories/implementations/ExamplesVocabularyRepository";
import { IMeaningVocabularyRepository } from "../../modules/kimbundo/repositories/IMeaningVocabularyRepository";
import { MeaningVocabularyRepository } from "../../modules/kimbundo/repositories/implementations/MeaningVocabularyRepository";
import { ILearningVocabularyRepository } from "../../modules/kimbundo/repositories/ILearningVocabularyRepository";
import { LearningVocabularyRepository } from "../../modules/kimbundo/repositories/implementations/LearningVocabularyRepository";

container.registerSingleton<IVocabulariesRepository>(
  "VocabulariesRepository",
  VocabulariesRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<IExamplesVocabularyRepository>(
  "ExamplesVocabularyRepository",
  ExamplesVocabularyRepository
);

container.registerSingleton<IMeaningVocabularyRepository>(
  "MeaningVocabularyRepository",
  MeaningVocabularyRepository
);

container.registerSingleton<ILearningVocabularyRepository>(
  "LearningVocabularyRepository",
  LearningVocabularyRepository
)