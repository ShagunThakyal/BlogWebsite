import dotenv from "dotenv" // As early as possible in your application, import and configure dotenv: this is our first file which will be loaded 
import mongoose from "mongoose";
import connectDB from "./db/index.js";
import {app} from "./app.js"

//  it ensures that the environment variables are loaded before your application starts, making them available in your application code.
dotenv.config({
    path: "./.env",
  }); // we have add this in package json file under dev -r dotenv/config --experimental-json-modules
  


connectDB()
.then(()=>{
  app.listen(process.env.PORT||9000, ()=>{
  console.log(`Server is running on port: ${process.env.PORT}`)
  });
})
.catch(
  (err)=>{console.log("Mongo DB connection failed !! " + err)}
)