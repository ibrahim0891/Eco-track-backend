import { sendResponse } from "../utils/sendResponse";


class TipsController {
    async createTip(req, res) {
        try {
            const tip = req.body;
            await tipsService.createTip(tip)
            sendResponse(res, 200, tip, 'Tip created', null)
        } catch (error) {
            sendResponse(res, 500, null, error.message, error)
        }
    }

    async updateTips(req, res) {
        try {
            const { id } = req.params;
            const updatedData = req.body;
            const tip = await tipsService.updateTips(id, updatedData)
            sendResponse(res, 200, tip, 'Tip updated', null)
        } catch (error) {
            sendResponse(res, 500, null, error.message, error)
        }
    }

    //todo: add limit and skip later
    async getTips(req, res) {
        try {
            let tips = await tipsService.getTips()
            sendResponse(res, 200, tips, tips.length > 0 ? 'Tips found' : 'No tips found', null)
        } catch (error) {
            sendResponse(res, 500, null, error.message, error)
        }
    }

    async getTipsById(req, res) {
        try {
            const { id } = req.params;
            const tip = await tipsService.getTipsById(id)
            sendResponse(res, 200, tip, 'Tip found', null)
        } catch (error) {
            sendResponse(res, 500, null, error.message, error)
        }
    }
}

const tipsController = new TipsController
export default tipsController