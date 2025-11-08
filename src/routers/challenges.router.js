import { Router } from "express";
import challengesController from "../controllers/challenges.controller.js";


const challengesRouter = Router()

challengesRouter.get('/', challengesController.getChallagens)
challengesRouter.post('/create', challengesController.createChallenge)

export { challengesRouter }