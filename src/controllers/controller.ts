import crypto from "node:crypto"
import { encontrarEquipo } from "../utils/buscarEquipo"
import { writeDB } from "../db/connection"
import { commands } from "../utils/commands"

const main = (argumentos: any[], accion: string, equipos: any[]) => {
  switch (accion) {
    case "info":
      console.log("---- Comandos Válidos ----")
      console.table(commands)
      break;
    case "lista":
      console.log(equipos)
      break;
    case "buscarEquipo":
      if (!argumentos[2]) {
        console.log("Debe ingresar el nombre que desea buscar")
        break
      } 
      const equipoEncontrado = encontrarEquipo(equipos, argumentos[3])
      
      if (!equipoEncontrado) {
        console.log("No se encuentra el equipo en nuestra base de datos")

      } else {
        console.log(equipoEncontrado)
      }
      break;
    case "borrarEquipo":
      const nombreDel = argumentos[3]

      if (!nombreDel) {
        console.log("Debes ingresar un nombre valido para borrarlo de la base de datos")
        break
      }

      const indice = equipos.findIndex((equipo: any) => equipo.nombre === nombreDel)

      if (indice === -1) {
        console.log("El equipo no se encuentra en nuestra base de datos")
        break
      }

      const equipoBorrado = equipos.splice(indice, 1)
      
      writeDB(equipos)
      console.log("El equipo que ha sido eliminado en nuestra base de datos es:\n", equipoBorrado[0])
      break;
    case "agregarEquipo":
      const inputNombre = argumentos[3]
      const inputdt = argumentos[4]
      const inputEstadio = argumentos[5]
      const inputTitulosNacionales = argumentos[6]
      const inputTitulosInternacionales = argumentos[7]

      if (!inputNombre || !inputdt || !inputEstadio || !inputTitulosNacionales || !inputTitulosInternacionales) {
        console.log("Debes ingresar los datos requeridos de nombre, dt, estadio, titulos nacionales e internacionales")
        break

      }

      const equipo = encontrarEquipo(equipos, argumentos[3])

      if (equipo) {
        console.log("El equipo ya se encuentra en nuestra base de datos")
        break
      }

      const nuevoEquipo = {
        id: crypto.randomUUID(),
        nombre: inputNombre,
        dt: inputdt,
        estadio: inputEstadio,
        titulosNacionales: inputTitulosNacionales,
        titulosInternacionales: inputTitulosInternacionales

      }
      equipos.push(nuevoEquipo)
      writeDB(equipos)

      console.log(equipos, "<--- Base de datos de equipos Actualizada")
      break;
    case "actualizarEquipo":
      const nombreEquipoUpd = argumentos[3]
      const nombredtUpd = argumentos[4]
      const estadioUpd = argumentos[5]
      const titulosNacionalesUpd = argumentos[6]
      const titulosInternacionalesUpd = argumentos[7]
      
      if (!nombreEquipoUpd || !nombredtUpd || !estadioUpd || !titulosNacionalesUpd || !titulosInternacionalesUpd) {
        console.log("Debes ingresar los datos requeridos")
        break
      }

      const equipoAActualizar = encontrarEquipo(equipos, nombreEquipoUpd)

      if (!equipoAActualizar) {
        console.log("El equipo no existe en nuestra base de datos")
        break
      }

      equipoAActualizar.dt = nombredtUpd
      equipoAActualizar.estadio = estadioUpd
      equipoAActualizar.titulosNacionales = titulosNacionalesUpd
      equipoAActualizar.titulosInternacionales = titulosInternacionalesUpd
      writeDB(equipos)

      console.log(equipoAActualizar)
      break
    default:
      console.log("Comando Invalido")
      break
  }
 }

export { main }
