"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearEquipo = crearEquipo;
exports.listarEquipos = listarEquipos;
exports.obtenerEquipo = obtenerEquipo;
exports.actualizarEquipo = actualizarEquipo;
exports.eliminarEquipo = eliminarEquipo;
exports.info = info;
const equiposDB_1 = require("../equiposDB");
const buscarEquipo_1 = require("../utils/buscarEquipo");
async function crearEquipo(data) {
    try {
        const equipo = new equiposDB_1.Equipo({
            nombre: (data === null || data === void 0 ? void 0 : data.nombre) || "Equipo Genérico",
            dt: (data === null || data === void 0 ? void 0 : data.dt) || "DT Desconocido",
            estadio: (data === null || data === void 0 ? void 0 : data.estadio) || "Estadio sin nombre",
            titulosNacionales: (data === null || data === void 0 ? void 0 : data.titulosNacionales) || 0,
            titulosInternacionales: (data === null || data === void 0 ? void 0 : data.titulosInternacionales) || 0
        });
        const guardado = await equipo.save();
        console.log("✅ Equipo creado exitosamente:", guardado);
    }
    catch (error) {
        console.error("❌ Error al crear el equipo:", error);
    }
}
async function listarEquipos() {
    try {
        const equipos = await equiposDB_1.Equipo.find().lean();
        if (equipos.length === 0) {
            console.log("ℹ️ No hay equipos en la base de datos.");
            return;
        }
        console.table(equipos, ["id", "nombre", "dt", "titulosNacionales"]);
    }
    catch (error) {
        console.error("❌ Error al listar equipos:", error);
    }
}
async function obtenerEquipo(id) {
    try {
        const equipo = await (0, buscarEquipo_1.buscarPorId)(id);
        if (!equipo)
            return console.log("⚠️ No se encontró el equipo con ese ID.");
        console.log("🔎 Equipo encontrado:", equipo);
    }
    catch (error) {
        console.error("❌ Error al buscar el equipo:", error);
    }
}
async function actualizarEquipo(id, data) {
    try {
        const actualizado = await equiposDB_1.Equipo.findOneAndUpdate({ id }, data, { new: true });
        if (!actualizado)
            return console.log("⚠️ Equipo no encontrado para actualizar.");
        console.log("♻️ Equipo actualizado:", actualizado);
    }
    catch (error) {
        console.error("❌ Error al actualizar:", error);
    }
}
async function eliminarEquipo(id) {
    try {
        const eliminado = await equiposDB_1.Equipo.findOneAndDelete({ id });
        if (!eliminado)
            return console.log("⚠️ No se encontró el equipo para eliminar.");
        console.log("🗑️ Equipo eliminado:", eliminado);
    }
    catch (error) {
        console.error("❌ Error al eliminar:", error);
    }
}
function info() {
    console.log(`
ℹ️ Comandos disponibles:

npm run dev info
npm run dev crear
npm run dev listar
npm run dev obtener <id>
npm run dev actualizar <id> campo=valor [campo=valor...]
npm run dev eliminar <id>
`);
}
