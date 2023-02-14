import { Router } from "express";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { CreateExamplesVocabularyController } from "../../../../modules/kimbundo/useCases/createExampleVocabulary/CreateExampleVocabularyController";
import { CreateLearningVocabularyController } from "../../../../modules/kimbundo/useCases/createLearningVocabulary/CreateLearningVocabularyController";
import { CreateMeaningVocabularyController } from "../../../../modules/kimbundo/useCases/createMeaningVocabulary/CreateMeaningVocabularyController";
import { CreateVocabularyController } from "../../../../modules/kimbundo/useCases/createVocabulary/CreateVocabularyController";
import { ListVocabulariesController } from "../../../../modules/kimbundo/useCases/listVocabulary/ListVocabulariesController";

const vocabulariesRoutes = Router();

const createVocabulariesController = new CreateVocabularyController();

const listVocabulariesController = new ListVocabulariesController();

const createExamplesVocabularyController = new CreateExamplesVocabularyController();

const createMeaningVocabularyController = new CreateMeaningVocabularyController();

const createVocabularyLearningController = new CreateLearningVocabularyController();

vocabulariesRoutes.post("/", ensureAuthenticated, createVocabulariesController.handle);

vocabulariesRoutes.get("/", listVocabulariesController.handle);

vocabulariesRoutes.post("/example", ensureAuthenticated, createExamplesVocabularyController.handle);

vocabulariesRoutes.post("/meaning", ensureAuthenticated, createMeaningVocabularyController.handle);

vocabulariesRoutes.post("/learning", createVocabularyLearningController.handle);

export { vocabulariesRoutes }
