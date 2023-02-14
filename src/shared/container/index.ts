import { container } from "tsyringe";
import { UsersRepository } from "../../modules/account/infra/repositories/UsersRepository";
import { IUsersRepository } from "../../modules/account/repositories/IUsersRepository";
import { VocabulariesRepository } from "../../modules/kimbundo/repositories/implementations/VocabulariesRepository";
import { IVocabulariesRepository } from "../../modules/kimbundo/repositories/IVocabulariesRepository";
import { IExamplesVocabularyRepository } from "../../modules/kimbundo/repositories/IExamplesVocabularyRepository";
import { ExamplesVocabularyRepository } from "../../modules/kimbundo/infra/repositories/ExamplesVocabularyRepository";
import { IMeaningVocabularyRepository } from "../../modules/kimbundo/repositories/IMeaningVocabularyRepository";
import { MeaningVocabularyRepository } from "../../modules/kimbundo/repositories/implementations/MeaningVocabularyRepository";
import { IUserVocabularyRepository } from "../../modules/kimbundo/repositories/IUserVocabularyRepository";
import { UserVocabularyRepository } from "../../modules/kimbundo/repositories/implementations/UserVocabularyRepository";

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

container.registerSingleton<IUserVocabularyRepository>(
  "UserVocabularyRepository",
  UserVocabularyRepository
)