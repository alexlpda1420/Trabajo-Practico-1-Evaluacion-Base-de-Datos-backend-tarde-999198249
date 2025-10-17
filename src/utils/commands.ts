import {
  crearEquipo,
  listarEquipos,
  obtenerEquipo,
  actualizarEquipo,
  eliminarEquipo,
  info
} from "../controllers/controller";

function parsearCampos(args: string[]) {
  const data: Record<string, string | number> = {};

  for (const a of args) {
    const [k, ...rest] = a.split("=");
    if (!k || rest.length === 0) continue;

    let value: string | number = rest.join("=");

    // si es un número válido, lo convierto
    const posibleNumero = Number(value);
    if (!Number.isNaN(posibleNumero) && String(value).trim() !== "") {
      value = posibleNumero;
    } else {
      // si no es número, limpio comillas si las hubiera
      value = String(value).replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1");
    }

    data[k] = value;
  }

  return data;
}


export async function ejecutarComando() {
  const [, , comando, ...args] = process.argv;

  switch (comando) {
    case "info":
    case undefined:
      info();
      break;
    case "crear":
      await crearEquipo(parsearCampos(args));
      break;
    case "listar":
      await listarEquipos();
      break;
    case "obtener":
      await obtenerEquipo(args[0]);
      break;
    case "actualizar":
      await actualizarEquipo(args[0], parsearCampos(args.slice(1)));
      break;
    case "eliminar":
      await eliminarEquipo(args[0]);
      break;
    default:
      console.log("❓ Comando no reconocido. Usá 'npm run dev info'");
  }
}
