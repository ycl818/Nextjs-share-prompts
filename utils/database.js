import mongoose from "mongoose";

let isConnect = false; // track the connection

export const connectTODB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnect) {
    console.log("MongoDB is already connected");
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: "share_propmt",
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnect = true;

    console.log("MongoDB connected");
  } catch (error) {
    console.log(error);
  }
};
