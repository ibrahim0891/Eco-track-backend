import { db } from "../../database.js"
import { throwError } from "../../utils/throwError.js"

 


class Challenges {
    constructor() {
        this.challenges = () => {
            return db.collection('challenges')
        }
        this.userChallenges = () => {
            return db.collection('userChallenges')
        }
    }

    async getChallenges(filters) {
        try {
            const challenges = await this.challenges().find(filters).toArray()
            return challenges
        } catch (error) {
            throwError(error, error.message)
        }
    }

    async createChallenge(challenge) {
        try {
            let result = await this.challenges().insertOne(challenge)
            return result
        } catch (error) {
            throwError(error)
        }
    }

    async joinChallenges(userId, challengeId) {
        try {
            const challengeJoinResult = await this.challenges().updateOne({ _id: challengeId }, { $push: { joinedUsers: userId }, $inc: { participants: 1 } })
            const userChallenge = {
                "_id": ObjectId,
                "userId": userId , 
                "challengeId": challengeId ,
                "status": "Not Started", // e.g., "Not Started", "Ongoing", "Finished"
                "progress": 0,
                "joinDate": new Date(),
            }
            const userChallengeJoinResult = await this.userChallenges().insertOne(userChallenge)
            return { challengeJoinResult, userChallengeJoinResult }
        } catch (error) {
            throwError(error, error.message)
        }
    }

    async getChallengeById(id) {
        try {
            let query = { _id: id }
            let result = await this.challenges().findOne(query)
            return result
        } catch (error) {
            throwError(error, error.message)
        }
    }

    async updateChallange(id, updatedData) {
        try {
            let query = { _id: id }
            let result = await this.challenges().updateOne(query, { $set: updatedData })
            return result
        } catch (error) {
            throwError(error, error.message)
        }
    }

    async deleteChallenge(id) {
        try {
            let query = { _id: id }
            let result = await this.challenges().deleteOne(query)
            return result
        } catch (error) {
            throwError(error, error.message)
        }
    }


}

const challengesService = new Challenges()
export { challengesService }