import { db } from "../../database.js"
import { throwError } from "../../utils/throwError.js"


class UserServices {
    constructor() {
        this.users = () => {
            return db.collection('users')
        }
    }
    async createUser(user){
        try {
            let result = await this.users().insertOne(user)
            return result
        } catch (error) {
            throwError(error)
        }
    }

    async getUserById(id){
        try {
            let query = { _id: id }
            let result = await this.users().findOne(query)
            return result
        } catch (error) {
            throwError(error, error.message)
        }
    }

    async updateUser(id , updatedData){
        try {
            let query = { _id: id }
            let result = await this.users().updateOne(query, { $set: updatedData })
            return result
        } catch (error) {
            throwError(error, error.message)
        }
    }
}

const userServices = new UserServices()
export default userServices