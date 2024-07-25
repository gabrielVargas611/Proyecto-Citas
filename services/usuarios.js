const { PrismaClient } = require("@prisma/client");
//const bcrypt = require ('bcrypt');
//const crypto = require ('crypto');
//const jwt = require('jsonwebtoken');

const prisma = new PrismaClient();

class Usuarios {
  constructor() {}

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
 /* async login(Solicitud){
    let resultado;
    try{
      resultado = Resultado = await jwt.verify(Solicitud.headers.authorization.split(" ")[1], this.PalabraSecreta);
    }
    catch(err){
      resultado = err
    }
    return resultado
    /*bcrypt.hash(Clave,10,function(err, hash){
      console.log(hash);
    })
    PalabraSecreta ="secret Recepie"
  }

  async autenticar(user, clave){
  let Resultado = await bcrypt.compare(ClaveSinEncriptar, Usuario.Clave);
  if(Resultado === true){
    return jwt.sign({ data: Usuario.Rol }, this.PalabraSecreta, { expiresIn: '5m'});
  }
    else{
      return false;
    }
  }
}

async function ValidarToken2(){
  let resultado
  try{
    Resultado = await Usuarios.login(Solicitud);
  }
  catch(error){
    Resultado.json(error);
  }
  return Resultado.data
}


function encriptar(){
  bcrypt.hash("ClaveSinEncriptar",10,function(err,hash){
    console.log(hash);
  })
}*/