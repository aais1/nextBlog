import { mongoose } from "mongoose";

export const connectToDb = async () => {
    try{
        await mongoose.connect(process.env.MONGO_URI)
    }catch(err){
        console.log('Something went wrong '+err)
    }
}