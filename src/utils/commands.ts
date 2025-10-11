export const commands = [
  { comando: "lista", descripcion: "Muestra de lista de equipos", parametros: "" },
  { comando: "agregarEquipo", descripcion: "Agrega un equipo a la base de datos", parametros: ["nombre", "dt", "estadio", "titulosNacionales", "titulosInternacionales"] },
  { comando: "buscarEquipo", descripcion: "Busca un equipo mediante el nombre", parametros: ["nombre"] },
  { comando: "borrarEquipo", descripcion: "Elimina un equipo mediante el nombre", parametros: ["nombre"] },
  { comando: "actualizarEquipo", descripcion: "Actualiza un usuario mediante los argumentos permitidos y proporcionados", parametros:["dt","titulosNacionales","titulosInternacionales"]}  
]