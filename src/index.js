import { config } from './config.js';
import express from 'express'
import cors from 'cors' 
import { connectDatabase , db  } from './database.js'
import { challengesRouter } from './routers/challenges.router.js';
import userRouter from './routers/user.router.js';
import tipsRouter from './routers/tips.router.js';

const app = express()
const { port } = config

app.use(cors())
app.use(express.json())

app.use('/challenges', challengesRouter)
app.use('/users', userRouter)
app.use('/tips', tipsRouter)

if(!db){
    await connectDatabase() 
} 

app.listen(port, () => {
    console.log('Server running on port 3000')
})
 

