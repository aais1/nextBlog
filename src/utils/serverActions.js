"use server"

//server actions to create post and a user without using any of the traditiona api route

import { connectToDb } from "./connectToDb";
import { Post , User } from '@/models/models.js'

export const createPost=async(formData)=>{


    const title=formData.get("title")
    const description=formData.get("description")
    
    try{
        connectToDb();
        const newPost=new Post({
            title,
            description,
        })

        await newPost.save()
        console.log('saved')
        console.log(title,description)
    }catch(err){
        console.log(err)
        throw new Error('Error in fetching posts')
    }
}


export const createUser = async (formData)=>{


    const username=formData.get("username")
    const email=formData.get("email")
    const password=formData.get("password")

    console.log(username,email,password)
    try{
        connectToDb();
        const newUser=new User({
            username,
            email,
            password,
        })
        await newUser.save()
        console.log("user created!")
    }catch(err){
        console.log(err)
    }
}