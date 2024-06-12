const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class Programaciones {
  constructor() {}

  async Agregar(Programacion) {
    let resultado;

    try {
      resultado = await prisma.programaciones.create({
        data: {
          fechaInicioDisponible: FechaInicio,
          fechaFinalDisponible: FechaFinal,
          IdDelServicio: Servicio,
        },
      });

      
      auditoria = await prisma.auditorias.create({
        data: {
          descripcionDeAccion: `Se creo la programacion: ${nombre}`
        }
      })

    } catch (error) {
      console.error(
        `No se pudo crear la programacion ${Programacion} debido al error: ${error}`
      );
    }
    return resultado;
  }

  async Actualizar(programacionesId, Programacion) {
    let resultado;
    try {
      resultado = await prisma.programaciones.update({
        where: { programacionesId: parseInt(programacionesId) },
        data: {
            fechaInicioDisponible: FechaInicio,
            fechaFinalDisponible: FechaFinal,
            IdDelServicio: Servicio,
        },
      });
      auditoria = await prisma.auditorias.create({
        data: {
          descripcionDeAccion: `Se actualizo la programacion: ${nombre}`
        }
      })
    } catch (error) {
      console.error(
        `No se pudo actualizar la programacion ${Programacion} debido al error: ${error}`
      );
    }
    return resultado;
  }

  async Borrar(programacionesId) {
    let resultado;
    try {
      resultado = await prisma.programaciones.delete({
        where: {
            programacionesId: parseInt(programacionesId),
        },
      });
      auditoria = await prisma.auditorias.create({
        data: {
          descripcionDeAccion: `Se borro la programacion: ${nombre}`
        }
      })
    } catch (error) {
      console.error(
        `No se pudo eliminar la programacion ${Programacion} debido al error: ${error}`
      );
    }
    return resultado;
  }

  Listar(programacionesId) {
    let programaciones;
    if (programacionesId === undefined) {
        programaciones = prisma.programaciones.findMany();
    } else {
        programaciones = prisma.programaciones.findMany({
        where: {
          programacionesId: parseInt(programacionesId),
        },
      });
    }
    return programaciones;
  }
}

module.exports = Programaciones;
