const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

class Usuarios {
  constructor() {}

  async Agregar(Usuario) {
    let resultado;
    try {
      resultado = await prisma.usuarios.create({
        data: {
            nombreDelUsuario: Nombre,
            claveDelUsuario: Clave
        },
      });
    } catch (error) {
      console.error(
        `No se pudo crear el usuario ${Usuario} debido al error: ${error}`
      );
    }
    return resultado;
  }

  async Actualizar(usuarioId, Usuario) {
    let resultado;
    try {
      resultado = await prisma.usuarios.update({
        where: { usuarioId: parseInt(usuarioId) },
        data: {
            nombreDelUsuario: Nombre,
            claveDelUsuario: Clave
        },
      });
    } catch (error) {
      console.error(
        `No se pudo actualizar el usuario ${Usuario} debido al error: ${error}`
      );
    }
    return resultado;
  }

  async Borrar(usuarioId) {
    let resultado;
    try {
      resultado = await prisma.programaciones.delete({
        where: {
            usuarioId: parseInt(usuarioId),
        },
      });
    } catch (error) {
      console.error(
        `No se pudo eliminar el usuario ${Usuario} debido al error: ${error}`
      );
    }
    return resultado;
  }

  Listar(usuarioId) {
    let usuarios;
    if (usuarioId === undefined) {
        usuarios = prisma.usuarios.findMany();
    } else {
        usuarios = prisma.usuarios.findMany({
        where: {
            usuarioId: parseInt(usuarioId),
        },
      });
    }
    return usuarios;
  }
}

module.exports = Usuarios;
