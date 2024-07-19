import mongoose from "mongoose";
import { User } from "../models/user";
export const connectDb = async () => {
  const Mongo_Uri="mongodb+srv://kshitijsingh2262002:helloworld@cluster0.ml7vwcg.mongodb.net/"

  try {
    const { connection } = await mongoose.connect(Mongo_Uri)
    console.log("db connected...");
    // console.log(connection);

    //testing and ceating new user

    // const uuser = new User({
    //   name: "test name",
    //   email: "test@gmail.com",
    //   password: "testpassword",
    //   about: "this is testing",
    // });

    // await uuser.save();

    console.log("user is created");

    console.log("connected with host ", connection.host);
  } catch (error) {
    console.log("failed  to connect with database");
    console.log(error);
  }
};
