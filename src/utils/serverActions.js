import { connectToDb } from "./connectToDb";
import { Post } from '@/models/models.js'


export const createPost=async(formData)=>{
    "use server"

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
