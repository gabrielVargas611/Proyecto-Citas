const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class Solicitudes {
  constructor() {}

  async Agregar(descripcionDeSolicitid, fechaSolicitud, IdDelservicio, IdDelsolicitante) {
    let resultado;
    try {
      resultado = await prisma.solicitudes.create({
        data: {
          descripcionDeSolicitid: descripcionDeSolicitid,
          fechaSolicitud: fechaSolicitud,
          IdDelservicio: IdDelservicio,
          IdDelsolicitante: IdDelsolicitante,
        },
      });
      let auditoria;
      auditoria = await prisma.auditorias.create({
        data: {
          descripcionDeAccion: `Se creo una Solicitd`,
        },
      });
    } catch (error) {
      console.error(
        `No se pudo crear la solicitud debido al error: ${error}`
      );
    }
    return resultado;
  }

  async Actualizar(solicitudesId, Solicitud, Fecha, Servicio, Solicitante) {
    let resultado;
    try {
      resultado = await prisma.solicitudes.update({
        where: { solicitudesId: parseInt(solicitudesId) },
        data: {
          descripcionDeSolicitid: Solicitud,
          fechaSolicitud: Fecha,
          IdDelservicio: Servicio,
          IdDelsolicitante: Solicitante,
        },
      });
      let auditoria;
      auditoria = await prisma.auditorias.create({
        data: {
          descripcionDeAccion: `Se actualizo una Solicitd`,
        },
      });
    } catch (error) {
      console.error(
        `No se pudo actualizar la solicitud debido al error: ${error}`
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
          descripcionDeAccion: `Se borro la Solicitd`,
        },
      });
    } catch (error) {
      console.error(
        `No se pudo eliminar la solicitud debido al error: ${error}`
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
