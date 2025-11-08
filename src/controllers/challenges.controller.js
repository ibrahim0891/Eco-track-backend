import { challengesService } from "../services/challenges.service.js"
import { sendResponse } from "../utils/sendResponse.js";


class ChallangesControl {
    async getChallagens(req, res) {
        try {
            let challenges = await challengesService.getChallenges()
            sendResponse(res, 200, challenges, challenges.length > 0 ? 'Challenges found' : 'No challenges found', null)
        } catch (error) {
            sendResponse(res, 500, null, error.message , error)
        }
    }
    async createChallenge(req, res) {
       try {
         const challenge = req.body;
         await challengesService.createChallenge(challenge)
         sendResponse(res, 200, challenge, 'Challenge created', null)
       } catch (error) {
        sendResponse(res, 500, null, error.message , error)
       }
    }
}
const challengesController = new ChallangesControl()
export default challengesController