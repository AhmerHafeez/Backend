import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

const connectionDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);

    console.log(`\n✅ MONGODB connected !! DBhost: ${connectionInstance.connection.host}`);
  } catch (error) {
    console.log("❌ DB connection error", error);
    throw error;
  }
};

export default connectionDB;
