const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class Solicitudes {

  constructor() {

  };

  async Agregar(Solicitud) {
    let resultado;
    try {
      resultado = await prisma.solicitudes.create({
        data: {
            descripcionDeSolicitid: Descripcion,
            fechaSolicitud: Fecha,
            IdDelservicio: Servicio,
            IdDelsolicitante: Solicitante
        }
      });
    } catch (error) {
      console.error(`No se pudo crear la solicitud ${Solicitud} debido al error: ${error}`);
    }
    return resultado;
  };

  async Actualizar(SolicitudId, Solicitud) {
    let resultado;
    try {
      resultado = await prisma.solicitudes.update({
        where: { SolicitudId: parseInt(SolicitudId) },
        data: {
            descripcionDeSolicitid: Descripcion,
            fechaSolicitud: Fecha,
            IdDelservicio: Servicio,
            IdDelsolicitante: Solicitante
        },
      });
    } catch (error) {
        console.error(`No se pudo actualizar la solicitud ${Solicitud} debido al error: ${error}`);
    }
    return resultado;
  };

  async Borrar(SolicitudId) {
    let resultado;
    try {
      resultado = await prisma.solicitudes.delete({
        where: {
            SolicitudId: parseInt(SolicitudId),
        },
      });
    } catch (error) {
      console.error(`No se pudo eliminar la solicitud ${Solicitud} debido al error: ${error}`);
    }
    return resultado;
  };

  Listar(SolicitudId) {
    let solicitudes;
    if (SolicitudId === undefined) {
        solicitudes = prisma.solicitudes.findMany();
    } else {
        solicitudes = prisma.solicitudes.findMany({
        where: {
            SolicitudId: parseInt(SolicitudId),
        },
      });
    }
    return solicitudes;
  };
}

module.exports = Solicitudes;