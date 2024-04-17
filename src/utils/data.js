import { Post , User } from '@/models/models.js'
import { connectToDb } from './connectToDb';

export const getPosts=async()=>{
    connectToDb();
    try{
        const posts = await Post.find();
        return posts;
    }catch(err){
        console.log(err)
        throw new Error('Error in fetching posts')
    }
}

export const getPostById=async(slug)=>{
    connectToDb();
    try{
        const post = await Post.findById(slug);
        return post;
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