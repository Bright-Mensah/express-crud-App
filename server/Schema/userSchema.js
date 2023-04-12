import mongoose, { Schema } from "mongoose";


const userSchema = new Schema({
    name:{
        type:String,
        
    },
    email:{
        type:String,
       
    },
    password:{
        type:String,
        
    },
    date:{
        type:String,
        default:Date
    },
    
   
    
}, {collection:"users"})

export default mongoose.model('users',userSchema);