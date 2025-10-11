
const encontrarEquipo = (equipos: any[], nombre: string) => equipos.find((equipo) => equipo.nombre.toLowerCase() === nombre.toLowerCase())

export { encontrarEquipo }
