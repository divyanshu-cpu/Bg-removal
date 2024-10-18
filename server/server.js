import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import connectDB from './configs/mongodb.js';


//app config
const PORT = process.env.PORT || 4003
const app = express();
await connectDB()

//Initialize Middlewares
app.use(express.json())
app.use(cors())

// API routes
app.get('/',(req,res)=> res.send("API working"))

app.listen(PORT,()=> console.log("Server Running On Port "+PORT))