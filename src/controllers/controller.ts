import { Equipo, IEquipo } from "../equiposDB";
import { buscarPorId } from "../utils/buscarEquipo";

export async function crearEquipo(data?: Partial<IEquipo>) {
  try {
    const equipo = new Equipo({
      nombre: data?.nombre || "Equipo Genérico",
      dt: data?.dt || "DT Desconocido",
      estadio: data?.estadio || "Estadio sin nombre",
      titulosNacionales: data?.titulosNacionales || 0,
      titulosInternacionales: data?.titulosInternacionales || 0
    });

    const guardado = await equipo.save();
    console.log("✅ Equipo creado exitosamente:", guardado);
  } catch (error) {
    console.error("❌ Error al crear el equipo:", error);
  }
}

export async function listarEquipos() {
  try {
    const equipos = await Equipo.find().lean();
    if (equipos.length === 0) {
      console.log("ℹ️ No hay equipos en la base de datos.");
      return;
    }
    console.table(equipos, ["id","nombre", "dt", "estadio", "titulosNacionales", "titulosInternacionales"]);
  } catch (error) {
    console.error("❌ Error al listar equipos:", error);
  }
}

export async function obtenerEquipo(id: string) {
  try {
    const equipo = await buscarPorId(id);
    if (!equipo) return console.log("⚠️ No se encontró el equipo con ese ID.");
    console.log("🔎 Equipo encontrado:", equipo);
  } catch (error) {
    console.error("❌ Error al buscar el equipo:", error);
  }
}

export async function actualizarEquipo(id: string, data: Partial<IEquipo>) {
  try {
    const actualizado = await Equipo.findOneAndUpdate({ id }, data, { new: true });
    if (!actualizado) return console.log("⚠️ Equipo no encontrado para actualizar.");
    console.log("♻️ Equipo actualizado:", actualizado);
  } catch (error) {
    console.error("❌ Error al actualizar:", error);
  }
}

export async function eliminarEquipo(id: string) {
  try {
    const eliminado = await Equipo.findOneAndDelete({ id });
    if (!eliminado) return console.log("⚠️ No se encontró el equipo para eliminar.");
    console.log("🗑️ Equipo eliminado:", eliminado);
  } catch (error) {
    console.error("❌ Error al eliminar:", error);
  }
}

export function info() {
  console.clear();
  console.log("\n⚽  CRUD DE EQUIPOS DE FÚTBOL ARGENTINO");
  console.log("=========================================\n");

  console.log("📘 Comandos disponibles:\n");

  const comandos = [
    { Comando: "npm run dev info", Descripción: "Muestra esta ayuda" },
    { Comando: "npm run dev crear", Descripción: "Crea un nuevo equipo" },
    { Comando: "npm run dev listar", Descripción: "Lista todos los equipos" },
    { Comando: "npm run dev obtener <id>", Descripción: "Obtiene un equipo por su ID" },
    { Comando: "npm run dev actualizar <id> campo=valor", Descripción: "Actualiza campos del equipo" },
    { Comando: "npm run dev eliminar <id>", Descripción: "Elimina un equipo por su ID" }
  ];

  console.table(comandos);

  console.log("\n💡 Ejemplos rápidos:");
  console.log("\x1b[36m", "  npm run dev crear nombre=\"River Plate\" dt=\"Marcelo Gallardo\"", "\x1b[0m");
  console.log("\x1b[36m", "  npm run dev actualizar c9a64635-4b1c-4ef0-9c65-2a7b5f0c72aa titulosNacionales=39", "\x1b[0m");

  console.log("\n🔗 Base de datos conectada correctamente a MongoDB\n");
  console.log("=========================================\n");
}

