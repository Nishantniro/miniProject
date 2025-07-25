import mongoose from "mongoose";
const connectToMongoDB = async () =>{
        try{
            await mongoose.connect(process.env.MONGO_DB_URI)
            console.log("Connected to Database")
        }catch(error){
            console.log("Error while connecting to Database",error.message);
        }
}

export { connectToMongoDB }