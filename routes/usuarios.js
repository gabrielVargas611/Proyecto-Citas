const express = require("express");

const ServicioUsuarios = require("./../services/usuarios.js");
const Usuarios = new ServicioUsuarios();

const Router = express.Router();

//Buscador de Usuarios
function listadoDeUsuarioss(usuariosID) {
    return Usuarios.Listar(usuariosID);
}

//Buscar todas los Usuarios
Router.get("/", async (solicitud, respuesta) => {
    const Usuarios = await listadoDeUsuarioss(solicitud.params.usuariosID);
    respuesta.json(Usuarios);
  });

//Buscar un Usuario en especifico
Router.get("/:usuariosID", async (solicitud, respuesta) => {
    const Usuarios = await listadoDeUsuarioss(solicitud.params.usuariosID);
    respuesta.json(Usuarios);
  });

//Crear un Usuario
Router.post("/", async (solicitud, respuesta) => {
    const { User, Clave } = solicitud.body;
    respuesta.json(Usuarios.Agregar(solicitud.body.User, solicitud.body.Clave))
  });
  
  //Borrar un Usuario
  Router.delete("/:usuariosID", async (solicitud, respuesta) => {
    const { usuariosID } = solicitud.params;
    respuesta.json(Usuarios.Borrar(solicitud.body.usuariosID));
  });
  
  //Actualizar un Servicio
  Router.put("/:usuariosID", async (solicitud, respuesta) => {
    const { usuariosID } = solicitud.params;
    const { User, Clave } = solicitud.body;
    respuesta.json(Usuarios.Actualizar(usuariosID,User,Clave));
  });
  
  module.exports = Router;
  