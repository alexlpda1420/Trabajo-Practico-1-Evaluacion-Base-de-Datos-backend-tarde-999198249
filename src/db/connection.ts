import fs from "node:fs"

const DB_PATH = "./src/listaEquipos.json" 

const readDB = () => JSON.parse(fs.readFileSync(DB_PATH, "utf-8"))

const writeDB = (equipos: any) => fs.writeFileSync(DB_PATH, JSON.stringify(equipos))

export { readDB, writeDB }
