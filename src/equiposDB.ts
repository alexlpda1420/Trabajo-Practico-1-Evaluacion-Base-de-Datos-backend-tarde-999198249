import mongoose, { Schema, Document } from "mongoose";
import crypto from "crypto";

export interface IEquipo extends Document {
  id: string;
  nombre: string;
  dt: string;
  estadio: string;
  titulosNacionales: number;
  titulosInternacionales: number;
}

const EquipoSchema: Schema = new Schema(
  {
    id: { type: String, unique: true, default: () => crypto.randomUUID() },
    nombre: { type: String, required: true },
    dt: { type: String, required: true },
    estadio: { type: String, required: true },
    titulosNacionales: { type: Number, default: 0 },
    titulosInternacionales: { type: Number, default: 0 }
  },
  { timestamps: true }
);

export const Equipo = mongoose.models.Equipo || mongoose.model<IEquipo>("Equipo", EquipoSchema);
