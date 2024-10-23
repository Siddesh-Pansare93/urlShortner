import express from 'express'
import connectToDb from './connect.js'
import urlRouter from './src/routes/url.route.js'
import cors from 'cors'


const app = express()
const port = 8000

//db connection 
connectToDb()


var corsOptions = {
    origin: 'https://minimizer.vercel.app',
    optionsSuccessStatus: 200 
  }

//MiddleWares
app.use(cors(corsOptions))
app.use(express.json({urlencoded :true }))
app.use("/api/url" , urlRouter )

// app.get("/url" ,()=>{
//     console.log("req recieved in index.js ")
// })

app.listen(port , ()=>{
    console.log(`server is running on port ${port}`)
})