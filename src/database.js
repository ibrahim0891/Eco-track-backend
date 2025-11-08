import { MongoClient } from "mongodb";
import { config } from "./config.js";

let db = null;

const connectDatabase = async () => {
    if (db) return db; 
    try {
        const client = new MongoClient(config.mongoUrl)
        await client.connect();
        db = client.db('eco-track-db')
        console.log('Database connected')
    } catch (error) {
        console.log(error)
    }
}

 

export { connectDatabase , db }