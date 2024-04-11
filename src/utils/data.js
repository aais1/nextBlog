import { Post , User } from '@/models/models.js'
import { connectToDb } from './connectToDb';

export const getPosts=async()=>{
    connectToDb();
    try{
        const posts=await Post.find();
        console.log(posts)
    }catch(err){
        console.log(err)
        throw new Error('Error in fetching posts')
    }
}

const getPostById=async()=>{
    connectToDb();
    try{

    }catch(err){
        console.log(err)
        throw new Error('Error in fetching posts')
    }
}

const createPost=async()=>{
    connectToDb();
    try{


    }catch(err){
        console.log(err)
        throw new Error('Error in fetching posts')
    }
}

const getUser=async()=>{
    connectToDb();
    try{

    }catch(err){
        console.log(err)
        throw new Error('Error in fetching posts')
    }
}