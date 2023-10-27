import mongoose from "mongoose";
export async function connect(request) {
  try {
    const { connection } = await mongoose.connect(process.env.MONGO_URL, {
      dbName: "pcon",
    });
  } catch (error) {
    console.log(error);
  }
}
