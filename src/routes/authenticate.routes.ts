import { Router } from "express";
import { CreateAuthenticateUserController } from "../modules/account/useCases/createAuthenticateUser/CreateAuthenticateUserController";



const authenticateRouter = Router();

const authenticateUserController = new CreateAuthenticateUserController();

authenticateRouter.post("/sessions", authenticateUserController.handle);

export { authenticateRouter }