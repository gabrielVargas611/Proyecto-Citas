const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class Programaciones {
  constructor() {}

  async Agregar(Inicio, Final, Servicio) {
    
    try {
      await prisma.programaciones.create({
        data: {
          fechaInicioDisponible: Inicio,
          fechaFinalDisponible: Final,
          IdDelServicio: Servicio,
        },
      });

      await prisma.auditorias.create({
        data: {
          descripcionDeAccion: `Se creo una programacion`
        },
      });

    } catch (error) {
      console.error(
        `No se pudo crear la programacion debido al error: ${error}`
      );
    }
  }

  async Actualizar(programacionesId, Inicio, Final, Servicio) {
    let resultado;
    try {
      resultado = await prisma.programaciones.update({
        where: { programacionesId: parseInt(programacionesId) },
        data: {
            fechaInicioDisponible: Inicio,
            fechaFinalDisponible: Final,
            IdDelServicio: Servicio,
        },
      });
      let auditoria;
      auditoria = await prisma.auditorias.create({
        data: {
          descripcionDeAccion: `Se actualizo una programacion`
        }
      })
    } catch (error) {
      console.error(
        `No se pudo actualizar la programacion debido al error: ${error}`
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
      let auditoria;
      auditoria = await prisma.auditorias.create({
        data: {
          descripcionDeAccion: `Se borro la programacion`
        }
      })
    } catch (error) {
      console.error(
        `No se pudo eliminar la programacion debido al error: ${error}`
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
