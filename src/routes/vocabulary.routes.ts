import { Router } from "express";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { CreateExamplesVocabularyController } from "../modules/kimbundo/useCases/createExampleVocabulary/CreateExampleVocabularyController";
import { CreateLearningVocabularyController } from "../modules/kimbundo/useCases/createLearningVocabulary/CreateLearningVocabularyController";
import { CreateMeaningVocabularyController } from "../modules/kimbundo/useCases/createMeaningVocabulary/CreateMeaningVocabularyController";
import { CreateVocabularyController } from "../modules/kimbundo/useCases/createVocabulary/CreateVocabularyController";
import { ListUserVocabulariesController } from "../modules/kimbundo/useCases/listUserVocabulary/ListUserVocabulariesController";
import { ListVocabulariesController } from "../modules/kimbundo/useCases/listVocabulary/ListVocabulariesController";

const vocabulariesRoutes = Router();

const createVocabulariesController = new CreateVocabularyController();

const listVocabulariesController = new ListVocabulariesController();

const createExamplesVocabularyController = new CreateExamplesVocabularyController();

const createMeaningVocabularyController = new CreateMeaningVocabularyController();

const createVocabularyLearningController = new CreateLearningVocabularyController();

const listUserVocabulariesController = new ListUserVocabulariesController();

vocabulariesRoutes.post("/", ensureAuthenticated, createVocabulariesController.handle);

vocabulariesRoutes.get("/", listVocabulariesController.handle);

vocabulariesRoutes.post("/example", createExamplesVocabularyController.handle);

vocabulariesRoutes.post("/meaning", createMeaningVocabularyController.handle);

vocabulariesRoutes.post("/learning", createVocabularyLearningController.handle);

vocabulariesRoutes.get("/user", ensureAuthenticated, listUserVocabulariesController.handle);

export { vocabulariesRoutes }
