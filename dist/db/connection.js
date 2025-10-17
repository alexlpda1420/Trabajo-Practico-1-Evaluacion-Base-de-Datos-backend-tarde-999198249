"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.conectarDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const conectarDB = async () => {
    try {
        const uri = process.env.MONGO_URI || "mongodb://localhost:27017/bd";
        await mongoose_1.default.connect(uri);
        console.log("✅ Conectado correctamente a MongoDB");
    }
    catch (error) {
        console.error("❌ Error de conexión a MongoDB:", error);
        process.exit(1);
    }
};
exports.conectarDB = conectarDB;
