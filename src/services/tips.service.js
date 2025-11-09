


class Tips{
    constructor(){
        this.tips = () => {
            return db.collection('tips')
        }
    }
    async createTip(tip){
        try {
            let result = await this.tips().insertOne(tip)
            return result
        } catch (error) {
            throwError(error)
        }
    }
    async getTips(filters){
        try {
            const tips = await this.tips().find(filters).toArray()
            return tips
        } catch (error) {
            throwError(error, error.message)
        }
    }
    async updateTips(id , updatedData){
        try {
            let query = { _id: id }
            let result = await this.tips().updateOne(query, { $set: updatedData })
            return result
        } catch (error) {
            throwError(error, error.message)
        }
    }
    async getTipsById(id){
        try {
            let query = { _id: id }
            let result = await this.tips().findOne(query)
            return result
        } catch (error) {
            throwError(error, error.message)
        }
    }
}

const tipsService = new Tips()
export default tipsService