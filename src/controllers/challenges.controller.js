import { challengesService } from "../services/challenges.service.js"
import { sendResponse } from "../utils/sendResponse.js";


class ChallangesControl {
    async getChallagens(req, res) {
        try {
            let challenges = await challengesService.getChallenges()
            sendResponse(res, 200, challenges, challenges.length > 0 ? 'Challenges found' : 'No challenges found', null)
        } catch (error) {
            sendResponse(res, 500, null, error.message, error)
        }
    }

    async getChallengeById(req , res ){
        try {
            const { id } = req.params;
            const challenge = await challengesService.getChallengeById(id)
            sendResponse(res, 200, challenge, 'Challenge found', null)
        } catch (error) {
            sendResponse(res, 500, null, error.message, error)
        }
    }

    async createChallenge(req, res) {
        try {
            const challenge = req.body;
            await challengesService.createChallenge(challenge)
            sendResponse(res, 200, challenge, 'Challenge created', null)
        } catch (error) {
            sendResponse(res, 500, null, error.message, error)
        }
    }

    async updateChallange(req, res ){
        try {
            const { id } = req.params;
            const updatedData = req.body;
            const challenge = await challengesService.updateChallange(id, updatedData)
            sendResponse(res, 200, challenge, 'Challenge updated', null)
        } catch (error) {
            sendResponse(res, 500, null, error.message, error)
        }
    }

    async deleteChallenge(req, res) {
        try {
            const { id } = req.params;
            const challenge = await challengesService.deleteChallenge(id)
            sendResponse(res, 200, challenge, 'Challenge deleted', null)
        } catch (error) {
            sendResponse(res, 500, null, error.message, error)
        }
    }

    async joinChallenges(req, res) {
        try {
            const challengeId = req.params.id
            const { userId } = req.body;
            const { challengeJoinResult, userChallengeJoinResult } = await challengesService.joinChallenges(userId, challengeId)
            sendResponse(res, 200, { challengeJoinResult, userChallengeJoinResult }, 'Challenge joined', null)
        } catch (error) {
            sendResponse(res, 500, null, error.message, error)
        }
    }


}
const challengesController = new ChallangesControl()
export default challengesController