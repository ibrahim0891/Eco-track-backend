import { config } from './config.js';
import express from 'express'
import cors from 'cors' 
import { connectDatabase , db  } from './database.js'
import { challengesRouter } from './routers/challenges.router.js';

const app = express()
const { port } = config

app.use(cors())
app.use(express.json())

app.use('/challenges', challengesRouter)

if(!db){
    await connectDatabase() 
} 

app.listen(port, () => {
    console.log('Server running on port 3000')
})
 

