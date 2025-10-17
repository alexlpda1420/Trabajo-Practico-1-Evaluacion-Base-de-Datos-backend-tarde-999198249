import { Equipo, IEquipo } from "../equiposDB"; 

export async function buscarPorId(id: string): Promise<IEquipo | null> {
  return await Equipo.findOne({ id }).exec();
}

export async function buscarPorNombre(nombre: string): Promise<IEquipo | null> {
  return await Equipo.findOne({ nombre }).exec();
}
