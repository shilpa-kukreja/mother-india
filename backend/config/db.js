import mongoose from "mongoose";


const connectDB = async(req,res)=>{
    try {
         const conn=await mongoose.connect(process.env.MONGODB_URI);
         console.log(`MONGODB CONNECTED ${conn.connection.host}`);
    } catch (error) {
        console.log("MONGODB ERROR : ",error);
        process.exit(1);
    }
}

export default connectDB;
