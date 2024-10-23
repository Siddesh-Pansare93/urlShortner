import mongoose from "mongoose";

const connectToDb = async ()=>{
    const url = process.env.MONGO_URL
    console.log(url)
    if(!url){
        throw new Error('Please provide a mongo url')
    }
    try {
    return await mongoose.connect( url).then(()=>{
        console.log("Connected to MongoDB")
    })
        
    } catch (error) {
        console.log(`Mongodb connection Error : ${error.message}`)
    }
}

export default connectToDb