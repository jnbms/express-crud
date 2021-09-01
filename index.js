import express from 'express'
const app = express()
import Dotenv from 'dotenv'
Dotenv.config()

const port = process.env.PORT || 3000

app.get('/',(req,res)=>{
    res.send("HELLO GITHUB")
})

app.listen(port)
