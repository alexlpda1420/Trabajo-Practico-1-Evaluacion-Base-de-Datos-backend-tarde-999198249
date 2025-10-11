import { readDB } from "./db/connection";
import { main } from "./controllers/controller";

const argumentos = process.argv
const accion = argumentos[2]
const equipos = readDB()

main(argumentos, accion, equipos)
