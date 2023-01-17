import { Router } from "express";
import multer from "multer";

import uploadConfig from "../config/upload";
import { ensureAuthenticated } from "../middleware/ensureAuthenticated";
import { CreateUserController } from "../modules/account/useCases/createUser/CreateUserController";
import { ListVocabulariesUserController } from "../modules/account/useCases/listVocabulariesUser/ListVocabulariesUserController";
import { UpdateUserAvatarController } from "../modules/account/useCases/updateAvatar/UpdateUserAvatarController";

const userRoute = Router();

const uploadAvatar = multer(uploadConfig.upload(".tmp/avatar"))

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const listVocabulariesUserController = new ListVocabulariesUserController();

userRoute.post("/", createUserController.handle);

userRoute.patch("/avatar", ensureAuthenticated, uploadAvatar.single("avatar"), updateUserAvatarController.handle);

userRoute.get("/vocabularies", ensureAuthenticated, listVocabulariesUserController.handle)

export { userRoute }