import mongoose from "mongoose";

const connectToDb = async ()=>{
    return mongoose.connect( "mongodb://127.0.0.1:27017/urlShortner")
}

export default connectToDb