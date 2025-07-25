import dotenv from "dotenv";
import connectionDB from "./db/index.js";
import app from "./app.js";
dotenv.config();

connectionDB()
.then(() => {
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`server is running at port : ${process.env.PORT}`);
        
    })
}).catch((err) => {
    console.log("mongoDB connection Failed!!",err);
    
});



























/*
import express from "express";
const app = express();
; (async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI} ${DB_NAME}`)
        app.on ("error" , (error)=>{
            console.log("ERROR :" , error);
            throw error
        })

        app.listen (process.env.PORT , ()=>{
            console.log(`app is running on port ${process.env.PORT}`);
            
        })
    } catch (error) {
        console.error("ERROR", error)
        throw error
    }
})()
    */
