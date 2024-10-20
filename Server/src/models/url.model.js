import mongoose from 'mongoose'

const urlSchema = new mongoose.Schema({
    ShortId : {
        type: String,
        required: true ,
        unique: true
    }, 
   redirectUrl :  {
        type  : String , 
        required : true ,
    },
    visits : [{
        timestamps : {
            type: Number
         }
    }]
   
},{ timestamps:true})

export const  url = mongoose.model('url', urlSchema)