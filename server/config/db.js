import mongoose from "mongoose";

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_DB);
    console.log(`DB connected`);
  } catch (error) {
    throw error;
  }
};

mongoose.connection.on("disconnected", () => {
  console.log(`MONGO_DB disconnected`);
});

mongoose.connection.on("connected", () => {
  console.log(`MONGO_DB connected`);
});

export default connectDB;
