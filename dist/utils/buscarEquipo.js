"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buscarPorId = buscarPorId;
exports.buscarPorNombre = buscarPorNombre;
const equiposDB_1 = require("../equiposDB");
async function buscarPorId(id) {
    return await equiposDB_1.Equipo.findOne({ id }).exec();
}
async function buscarPorNombre(nombre) {
    return await equiposDB_1.Equipo.findOne({ nombre }).exec();
}
