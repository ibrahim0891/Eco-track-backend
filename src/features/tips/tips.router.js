import { Router } from "express";
import tipsController from "./tips.controller.js";


const tipsRouter = Router(); 

tipsRouter.get('/', tipsController.getTips)
tipsRouter.get('/:id', tipsController.getTipsById)
tipsRouter.post('/', tipsController.createTip)
tipsRouter.patch('/:id', tipsController.updateTips)

export default tipsRouter