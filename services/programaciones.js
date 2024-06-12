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

      let auditoria;
      auditoria = await prisma.auditorias.create({
        data: {
          descripcionDeAccion: `Se creo una programacion para: ${nombre}`,
        },
      });
    } catch (error) {
      console.error(
        `No se pudo crear la programacion ${Programacion} debido al error: ${error}`
      );
    }
    return resultado;
  }

  async Actualizar(programacionId, Programacion) {
    let resultado;
    try {
      resultado = await prisma.programaciones.update({
        where: { programacionId: parseInt(programacionId) },
        data: {
          fechaInicioDisponible: FechaInicio,
          fechaFinalDisponible: FechaFinal,
          IdDelServicio: Servicio,
        },
      });

      let auditoria;
      auditoria = await prisma.auditorias.create({
        data: {
          descripcionDeAccion: `Se actualizo una programacion para: ${nombre}`,
        },
      });
    } catch (error) {
      console.error(
        `No se pudo actualizar la programacion ${Programacion} debido al error: ${error}`
      );
    }
    return resultado;
  }

  async Borrar(programacionId) {
    let resultado;
    try {
      resultado = await prisma.programaciones.delete({
        where: {
          programacionId: parseInt(programacionId),
        },
      });

      let auditoria;
      auditoria = await prisma.auditorias.create({
        data: {
          descripcionDeAccion: `Se borro la programacion para: ${nombre}`,
        },
      });
    } catch (error) {
      console.error(
        `No se pudo eliminar la programacion ${Programacion} debido al error: ${error}`
      );
    }
    return resultado;
  }

  Listar(programacionId) {
    let programaciones;
    if (programacionId === undefined) {
      programaciones = prisma.programaciones.findMany();
    } else {
      programaciones = prisma.programaciones.findMany({
        where: {
          programacionId: parseInt(programacionId),
        },
      });
    }
    return programaciones;
  }
}

module.exports = Programaciones;
