import  mongoose  from "mongoose";

const connection={}
export const connectToDb = async () => {
    try{
        if(connection.isConnected){
            console.log('Using existing connection')
            return;
        }
        await mongoose.connect(process.env.MONGO_URI)
        connection.isConnected=true;
        console.log(connection.isConnected)
        console.log('Connected to db')
    }catch(err){
        console.log('Something went wrong '+err)
    }
}