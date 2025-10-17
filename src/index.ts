import { conectarDB } from "./db/connection";
import { ejecutarComando } from "./utils/commands";

async function main() {
  await conectarDB();
  await ejecutarComando();
}

main();
