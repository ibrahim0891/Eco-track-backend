import { Router } from "express";
import challengesController from "../controllers/challenges.controller.js";


const challengesRouter = Router()

challengesRouter.get('/', challengesController.getChallagens)
challengesRouter.get('/:id', challengesController.getChallengeById)

challengesRouter.post('/', challengesController.createChallenge)
challengesRouter.patch('/:id', challengesController.updateChallange)

challengesRouter.delete('/:id', challengesController.deleteChallenge)
challengesRouter.post('/join/:id', challengesController.joinChallenges)

export { challengesRouter }