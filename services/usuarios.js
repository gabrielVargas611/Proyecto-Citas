const { PrismaClient } = require("@prisma/client");
const bcrypt = require ('bcrypt');
const crypto = require ('crypto');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

class Usuarios {
  constructor() {}

  PalabraSecreta = "MiPalabraSecreta"

async autenticar(nombreDelUsuario,claveDelUsuario){
  let Usuario = await prisma.usuarios.findFirst({
    where: {
      nombreDelUsuario: nombreDelUsuario
    },
    select: {
      rol: true,
      claveDelUsuario: true,
      nombreDelUsuario: true,
      usuariosID: true
    }
  });
  let Resultado = await bcrypt.compare(claveDelUsuario, Usuario.claveDelUsuario)
  console.log(claveDelUsuario,Usuario.claveDelUsuario)
  console.log(Resultado)
  if(Resultado === true){
    return this.GenerarToken(Usuario.rol,Usuario.nombreDelUsuario, Usuario.usuariosID)
  }
  else{
    return false;
  }
}

async GenerarToken(Rol,nombreDelUsuario, usuariosID){
  let token = jwt.sign({ Rol, nombreDelUsuario, usuariosID }, this.PalabraSecreta, { expiresIn: '5m' }); 
  await prisma.usuarios.update({
    where: { 
      nombreDelUsuario: nombreDelUsuario,
      usuariosID: usuariosID
    },
    data: {
      Token: token,
    },
  });
  return token;
  
}

async ValidarToken(solicitud){
  let token;
  try{
    token =solicitud.headers.authorization.split("")[1];
  }
  catch(err){
    resultado = err;
  }
  let Resultado;
  // Validación del token
  try {
    Resultado = await jwt.verify(token, this.PalabraSecreta);
  } catch(err) {
    return err;
  }
  // ¿El token brindado es del usuario?
  let Usuario = await prisma.usuarios.findFirst({
    where: {
      nombreDelUsuario: Resultado.nombreDelUsuario,
    },
  });
  if (Usuario.Token === token) {
    return Resultado;
  } else {
    return false;
  }
};

async DesAutenticacion(nombreDelUsuario) {
  try {
    await prisma.usuarios.update({
      where: { 
        nombreDelUsuario: nombreDelUsuario,
      },
      data: {
        Token: "Sesión cerrada",
      },
    });
  } catch (err) {
  console.log(err);
  }
}

  async Agregar(User, Clave, Rol) {

    let resultado;
    try {
      resultado = await prisma.usuarios.create({
        data: {
          nombreDelUsuario: User,
          claveDelUsuario: Clave,
          //rol: Rol
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

  async Actualizar(usuariosID, User, Clave, Rol) {
    let resultado;
    try {
      resultado = await prisma.usuarios.update({
        where: { usuariosID: parseInt(usuariosID) },
        data: {
          nombreDelUsuario: User,
          claveDelUsuario: Clave,
          rol: Rol
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
  