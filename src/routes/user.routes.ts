import { Router } from "express";
import { CreateUserController } from "../modules/account/useCases/createUser/CreateUserController";


const userRoute = Router();

const createUserController = new CreateUserController();

userRoute.post("/", createUserController.handle);

export { userRoute }