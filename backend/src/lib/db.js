import mongoose from 'mongoose';

export const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("mongodb connected successfully");

  } catch (error) {
    console.log("mongodb connection error:", error);
  }
};

