"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ejecutarComando = ejecutarComando;
const controller_1 = require("../controllers/controller");
function parsearCampos(args) {
    const data = {};
    for (const a of args) {
        const [k, ...rest] = a.split("=");
        if (!k || rest.length === 0)
            continue;
        let value = rest.join("=");
        if (!isNaN(Number(value)))
            value = Number(value);
        value = value.replace(/^"(.*)"$/, "$1");
        data[k] = value;
    }
    return data;
}
async function ejecutarComando() {
    const [, , comando, ...args] = process.argv;
    switch (comando) {
        case "info":
        case undefined:
            (0, controller_1.info)();
            break;
        case "crear":
            await (0, controller_1.crearEquipo)(parsearCampos(args));
            break;
        case "listar":
            await (0, controller_1.listarEquipos)();
            break;
        case "obtener":
            await (0, controller_1.obtenerEquipo)(args[0]);
            break;
        case "actualizar":
            await (0, controller_1.actualizarEquipo)(args[0], parsearCampos(args.slice(1)));
            break;
        case "eliminar":
            await (0, controller_1.eliminarEquipo)(args[0]);
            break;
        default:
            console.log("❓ Comando no reconocido. Usá 'npm run dev info'");
    }
}
