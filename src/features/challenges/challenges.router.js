import { Router } from "express";  
import challengesController from "./challenges.controller.js";
import verifyUser from "../../Interceptors/verifyUser.js";


const challengesRouter = Router()

challengesRouter.get('/',verifyUser ,  challengesController.getChallagens)
challengesRouter.get('/:id', challengesController.getChallengeById)

challengesRouter.post('/', challengesController.createChallenge)
challengesRouter.patch('/:id', challengesController.updateChallange)

challengesRouter.delete('/:id', challengesController.deleteChallenge)
challengesRouter.post('/join/:id', challengesController.joinChallenges)

export default challengesRouter 