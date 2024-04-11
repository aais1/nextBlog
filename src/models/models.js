import mongoose from 'mongoose';

const userSchema=mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        min:6
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
        type:String,
        required:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
    },{timestamps:true}
)

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
    },
    slug:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:false
    }
},{timestamps:true})

export const User= mongoose.models.User || mongoose.model('User',userSchema);
export const Post= mongoose.models.Post || mongoose.model('Post',postScheme);