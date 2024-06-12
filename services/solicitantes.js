const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class Solicitantes {
  constructor() {}

  async Agregar(Nombre, Telefono, Correo, Clave) {
    let resultado;
    try {
      resultado = await prisma.solicitantes.create({
        data: {
          nombreDelSolicitante: Nombre,
          telefonoDelSolicitante: Telefono,
          correoDelSolicitante: Correo,
          claveDelSolicitante: Clave,
        },
      });
      let auditoria;
      auditoria = await prisma.auditorias.create({
        data: {
          descripcionDeAccion: `Se creo un Solicitante`,
        },
      });
    } catch (error) {
      console.error(
        `No se pudo crear al solicitante debido al error: ${error}`
      );
    }
    return resultado;
  }

  async Actualizar(solicitantesId, Nombre, Telefono, Correo, Clave) {
    let resultado;
    try {
      resultado = await prisma.solicitantes.update({
        where: { solicitantesId: parseInt(solicitantesId) },
        data: {
          nombreDelSolicitante: Nombre,
          telefonoDelSolicitante: Telefono,
          correoDelSolicitante: Correo,
          claveDelSolicitante: Clave,
        },
      });
      let auditoria;
      auditoria = await prisma.auditorias.create({
        data: {
          descripcionDeAccion: `Se actualizo un solicitante`,
        },
      });
    } catch (error) {
      console.error(
        `No se pudo actualizar al solicitante debido al error: ${error}`
      );
    }
    return resultado;
  }

  async Borrar(solicitantesId) {
    let resultado;
    try {
      resultado = await prisma.solicitantes.delete({
        where: {
          solicitantesId: parseInt(solicitantesId),
        },
      });
      let auditoria;
      auditoria = await prisma.auditorias.create({
        data: {
          descripcionDeAccion: `Se borro el Solicitante`,
        },
      });
    } catch (error) {
      console.error(
        `No se pudo actualizar al solicitante debido al error: ${error}`
      );
    }
    return resultado;
  }

  Listar(solicitantesId) {
    let solicitantes;
    if (solicitantesId === undefined) {
      solicitantes = prisma.solicitantes.findMany();
    } else {
      solicitantes = prisma.solicitantes.findMany({
        where: {
          solicitantesId: parseInt(solicitantesId),
        },
      });
    }
    return solicitantes;
  }
}

module.exports = Solicitantes;
