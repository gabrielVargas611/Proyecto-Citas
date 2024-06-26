const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class Usuarios {
  constructor() {}

  async Agregar(User, Clave) {
    let resultado;
    try {
      resultado = await prisma.usuarios.create({
        data: {
          nombreDelUsuario: User,
          claveDelUsuario: Clave,
        },
      });
      let auditoria;
      auditoria = await prisma.auditorias.create({
        data: {
          descripcionDeAccion: `Se creo el usuario`,
        },
      });
    } catch (error) {
      console.error(
        `No se pudo crear el usuario debido al error: ${error}`
      );
    }
    return resultado;
  }

  async Actualizar(usuariosID, User, Clave) {
    let resultado;
    try {
      resultado = await prisma.usuarios.update({
        where: { usuariosID: parseInt(usuariosID) },
        data: {
          nombreDelUsuario: User,
          claveDelUsuario: Clave,
        },
      });
      let auditoria;
      auditoria = await prisma.auditorias.create({
        data: {
          descripcionDeAccion: `Se actualizo el usuario`,
        },
      });
    } catch (error) {
      console.error(
        `No se pudo actualizar el usuario debido al error: ${error}`
      );
    }
    return resultado;
  }

  async Borrar(usuariosID) {
    let resultado;
    try {
      resultado = await prisma.usuarios.delete({
        where: {
          usuariosID: parseInt(usuariosID),
        },
      });
      let auditoria;
      auditoria = await prisma.auditorias.create({
        data: {
          descripcionDeAccion: `Se borro el usuario`,
        },
      });
    } catch (error) {
      console.error(
        `No se pudo eliminar el usuario debido al error: ${error}`
      );
    }
    return resultado;
  }

  Listar(usuariosID) {
    let usuarios;
    if (usuariosID === undefined) {
      usuarios = prisma.usuarios.findMany();
    } else {
      usuarios = prisma.usuarios.findMany({
        where: {
          usuariosID: parseInt(usuariosID),
        },
      });
    }
    return usuarios;
  }
}

module.exports = Usuarios;
