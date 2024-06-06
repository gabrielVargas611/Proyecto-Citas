const { PrismaClient } = require("@prisma/client")

const prisma = new PrismaClient();

class Solicitantes {

  constructor() {

  };

  async Agregar(Solicitante) {
    let resultado;
    try {
      resultado = await prisma.solicitantes.create({
        data: {
            nombreDelSolicitante: Solicitante,
            telefonoDelSolicitante: Telefono,
            correoDelSolicitante: Correo,
            claveDelSolicitante: Clave
        }
      });
    } catch (error) {
      console.error(`No se pudo crear al solicitante ${Solicitante} debido al error: ${error}`);
    }
    return resultado;
  };

  async Actualizar(SolicitanteId, Solicitante) {
    let resultado;
    try {
      resultado = await prisma.solicitantes.update({
        where: { SolicitanteId: parseInt(SolicitanteId) },
        data: {
            nombreDelSolicitante: Solicitante,
            telefonoDelSolicitante: Telefono,
            correoDelSolicitante: Correo,
            claveDelSolicitante: Clave
        },
      });
    } catch (error) {
      console.error(`No se pudo actualizar al solicitante ${Solicitante} debido al error: ${error}`);
    }
    return resultado;
  };

  async Borrar(SolicitanteId) {
    let resultado;
    try {
      resultado = await prisma.solicitantes.delete({
        where: {
            SolicitanteId: parseInt(SolicitanteId),
        },
      });
    } catch (error) {
      console.error(`No se pudo actualizar al solicitante ${Solicitante} debido al error: ${error}`);
    }
    return resultado;
  };

  Listar(SolicitanteId) {
    let solicitantes;
    if (SolicitanteId === undefined) {
        solicitantes = prisma.solicitantes.findMany();
    } else {
        solicitantes = prisma.solicitantes.findMany({
        where: {
            SolicitanteId: parseInt(SolicitanteId),
        },
      });
    }
    return solicitantes;
  };
}

module.exports = Solicitantes;