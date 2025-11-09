import { sendResponse } from "../utils/sendResponse.js";


const verifyUser = (req, res, next) => {
    const token = req.header('Authorization').split(' ')[1]
    if (!token) {
        return sendResponse(res, 401, null, 'Unauthorized', null)
    }
    console.log(token);
    next()
}

export default verifyUser