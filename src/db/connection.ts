import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

export const conectarDB = async () => {
  try {
    const uri = process.env.MONGO_URI || "mongodb://localhost:27017/bd";
    await mongoose.connect(uri);
    console.log("✅ Conectado correctamente a MongoDB");
  } catch (error) {
    console.error("❌ Error de conexión a MongoDB:", error);
    process.exit(1);
  }
};
