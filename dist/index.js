"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const connection_1 = require("./db/connection");
const commands_1 = require("./utils/commands");
async function main() {
    await (0, connection_1.conectarDB)();
    await (0, commands_1.ejecutarComando)();
}
main();
