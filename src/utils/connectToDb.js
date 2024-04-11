import { mongoose } from "mongoose";

export const connectToDb = async () => {
    const connection={}
    try{
        if(connection.isConnected){
            console.log('Using existing connection')
            return;
        }
        await mongoose.connect(process.env.MONGO_URI)
        connection.isConnected=true;
        console.log('Connected to db')
    }catch(err){
        console.log('Something went wrong '+err)
    }
}