import { db } from "../database.js";



class Challenges {
    constructor() {
        this.challenges = () => {
            return db.collection('challenges')
        }
    }

    async getChallenges() {
        try {
            const challenges = await this.challenges().find({}).toArray()
            return challenges
        } catch (error) {
            throw new Error(error)
        }
    }
    async createChallenge(challenge) {
        try {
            let result = await this.challenges().insertOne(challenge)
            return result
        } catch (error) {
            throw new Error(error)
        }

    }
}

const challengesService = new Challenges()
export { challengesService }