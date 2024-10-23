import mongoose from "mongoose";

const connectToDb = async ()=>{
    return mongoose.connect( process.env.MONGO_URL)
}

export default connectToDb