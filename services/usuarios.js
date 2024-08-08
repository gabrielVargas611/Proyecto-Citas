const { PrismaClient } = require("@prisma/client");
const bcrypt = require ('bcrypt');
const crypto = require ('crypto');
const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

class Usuarios {
  constructor() {}

  PalabraSecreta = "Secreto"

// async autenticacion(nombreDelUsuario,claveDelUsuario){
//   let Usuario = await prisma.usuarios.findFirst({
//     where: {
//       nombreDelUsuario: nombreDelUsuario
//     },
//     select: {
//       rol: true,
//       claveDelUsuario: true
//     }
//   });
//   let Resultado = await bcrypt.compare(claveDelUsuario, Usuario.claveDelUsuario)
//   if(Resultado === true){
//     return jwt.sign({data: Usuario.Rol}, this.PalabraSecreta,{expiresIn: '1m'});
//   }
//   else{
//     return false;
//   }
// }

// async ValidarToken(solicitud){
//   let resultado;
//   try{
//     resultado =await jwt.verify(solicitud.headers.authorization.split("")[1],this.PalabraSecreta);
//   }
//   catch(err){
//     resultado = err;
//   }
// }

// async ValidarTokenGlobal(solicitud){
//   let token = solicitud.headers.authorization && solicitud.headers.authorization.split("")[1];
//   let resultado;
//   try{
//     resultado = await this.ValidarToken(token);
//   }
//   catch(err){
//     console.error(
//       ` ${error}`
//     );
//   }
// }

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
          //rol: Rol
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
  