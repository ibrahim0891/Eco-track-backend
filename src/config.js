import dotenv from 'dotenv'
import path from 'path'
dotenv.config( )

export const config = {
    port : process.env.PORT,
    mongoUrl : process.env.MONGO_URL
}