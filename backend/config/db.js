import mongoose from "mongoose";
 
export const connectDB = async () => {
    await mongoose.connect('mongodb+srv://kiendao3110:Ddk311003@cluster0.vy7vfdb.mongodb.net/projects').then(()=>console.log("DB Connected"));
}