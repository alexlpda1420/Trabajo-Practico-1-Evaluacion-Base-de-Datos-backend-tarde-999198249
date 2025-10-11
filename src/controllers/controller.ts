import crypto from "node:crypto"
import { encontrarEquipo } from "../utils/buscarEquipo"
import { writeDB } from "../db/connection"
import { commands } from "../utils/commands"

const main = (argumentos: any[], accion: string, equipos: any[]) => {
  switch (accion) {
    case "Info":
      console.log("---- Comandos Válidos ----")
      console.table(commands)
      break;
    case "lista":
      console.log(equipos)
      break;
    case "buscarEquipo":
      if (!argumentos[3]) {
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
    /* case "borrarEquipo":
      const nombre = argumentos[3]

      if (!nombre) {
        console.log("Debes ingresar un nombre valido para borrarlo de la base de datos")
        break
      }

      const indice = equipos.findIndex((equipo: any) => equipo.nombre === nombre)

      if (indice === -1) {
        console.log("El equipo no se encuentra en nuestra base de datos")
        break
      }

      const equipoBorrado = equipos.splice(indice, 1)
      
      writeDB(equipos)
      console.log(equipoBorrado[0])
      break;
    case "agregarEquipo":
      const nombre = argumentos[3]
      const inputdt = argumentos[4]
      const inputEstadio = argumentos[5]
      const inputTitulosNacionales = argumentos[6]
      const inputTitulosInternacionales = argumentos[7]

      if (!nombre || !inputdt || !inputEstadio || !inputTitulosNacionales || !inputTitulosInternacionales) {
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
        nombre: nombre,
        dt: inputdt,
        estadio: inputEstadio,
        titulosNacionales: inputTitulosNacionales,
        titulosInternacionales: inputTitulosInternacionales

      }
      equipos.push(nuevoEquipo)
      writeDB(equipos)

      console.log(equipos, "<--- Base de datos de equipos Actualizada")
      break;
    case "actualizarEquipo": */
      const nombreEquipo = argumentos[3]
      const nombredt = argumentos[4]
      const estadio = argumentos[5]
      const titulosNacionales = argumentos[6]
      const titulosInternacionales = argumentos[7]
      
      if (!nombredt || !estadio || !titulosNacionales || !titulosInternacionales) {
        console.log("Debes ingresar los datos requeridos")
        break
      }

      const equipoAActualizar = encontrarEquipo(equipos, nombreEquipo)

      if (!equipoAActualizar) {
        console.log("El equipo no existe en nuestra base de datos")
        break
      }

     
      equipoAActualizar.dt = nombredt
      equipoAActualizar.estadio = estadio
      equipoAActualizar.titulosNacionales = titulosNacionales
      equipoAActualizar.titulosInternacionales = titulosInternacionales
      writeDB(equipos)

      console.log(equipoAActualizar)
      break
    default:
      console.log("Comando Invalido")
      break
  }
 }

export { main }
