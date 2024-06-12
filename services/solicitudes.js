const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class Solicitudes {
  constructor() {}

  async Agregar(Solicitud) {
    let resultado;
    try {
      resultado = await prisma.solicitudes.create({
        data: {
          descripcionDeSolicitid: Descripcion,
          fechaSolicitud: Fecha,
          IdDelservicio: Servicio,
          IdDelsolicitante: Solicitante,
        },
      });
      let auditoria;
      auditoria = await prisma.auditorias.create({
        data: {
          descripcionDeAccion: `Se creo la Solicitd: ${nombre}`,
        },
      });
    } catch (error) {
      console.error(
        `No se pudo crear la solicitud ${Solicitud} debido al error: ${error}`
      );
    }
    return resultado;
  }

  async Actualizar(solicitudesId, Solicitud) {
    let resultado;
    try {
      resultado = await prisma.solicitudes.update({
        where: { solicitudesId: parseInt(solicitudesId) },
        data: {
          descripcionDeSolicitid: Descripcion,
          fechaSolicitud: Fecha,
          IdDelservicio: Servicio,
          IdDelsolicitante: Solicitante,
        },
      });
      let auditoria;
      auditoria = await prisma.auditorias.create({
        data: {
          descripcionDeAccion: `Se actualizo la Solicitd: ${nombre}`,
        },
      });
    } catch (error) {
      console.error(
        `No se pudo actualizar la solicitud ${Solicitud} debido al error: ${error}`
      );
    }
    return resultado;
  }

  async Borrar(solicitudesId) {
    let resultado;
    try {
      resultado = await prisma.solicitudes.delete({
        where: {
          solicitudesId: parseInt(solicitudesId),
        },
      });
      let auditoria;
      auditoria = await prisma.auditorias.create({
        data: {
          descripcionDeAccion: `Se borro la Solicitd: ${nombre}`,
        },
      });
    } catch (error) {
      console.error(
        `No se pudo eliminar la solicitud ${Solicitud} debido al error: ${error}`
      );
    }
    return resultado;
  }

  Listar(solicitudesId) {
    let solicitudes;
    if (solicitudesId === undefined) {
      solicitudes = prisma.solicitudes.findMany();
    } else {
      solicitudes = prisma.solicitudes.findMany({
        where: {
          solicitudesId: parseInt(solicitudesId),
        },
      });
    }
    return solicitudes;
  }
}

module.exports = Solicitudes;
