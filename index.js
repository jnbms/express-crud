import express from 'express'
import dotenv from 'dotenv'

const app = express()

dotenv.config()
const PORT = process.env.PORT || 8080

app.get('/',(req,res)=>{
    res.send("CRUD Application")
})
app.listen(PORT,()=>{console.log(`server is running on http://localhost:${PORT}`)})
