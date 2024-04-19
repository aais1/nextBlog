import mongoose from 'mongoose';

//user scheme
const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
      
    },
    password:{
        type:String,
        required:true,
        min:[6,'Password must be atleast 6 characters']
    },
    img:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    userId:{
        type:String
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
    },{timestamps:true}
)

//post scheme
const postScheme=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    img:{
        type:String
    }
},{timestamps:true})

//models
export const User= mongoose.models.User || mongoose.model('User',userSchema);
export const Post= mongoose.models.Post || mongoose.model('Post',postScheme);