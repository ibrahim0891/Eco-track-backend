import userServices from "../services/user.service";
import { sendResponse } from "../utils/sendResponse";



class UserController {
    async createUser(req, res) {
        try {
            const user = req.body;
            await userServices.createUser(user)
            sendResponse(res, 200, user, 'User created', null)
        } catch (error) {
            sendResponse(res, 500, null, error.message, error)
        }
    }

    async getUserById(req, res){
        try {
            const { id } = req.params;
            const user = await userServices.getUserById(id)
            sendResponse(res, 200, user, 'User found', null)
        } catch (error) {
            sendResponse(res, 500, null, error.message, error)
        }
    }

    async updateUser(req, res){
        try {
            const { id } = req.params;
            const updatedData = req.body;
            const user = await userServices.updateUser(id, updatedData)
            sendResponse(res, 200, user, 'User updated', null)
        } catch (error) {
            sendResponse(res, 500, null, error.message, error)
        }
    }
}

const userController = new UserController()
export default userController