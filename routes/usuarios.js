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
    const { Usuario } = solicitud.body;
    respuesta.json(Usuario.Agregar(solicitud.body.Usuario))
  });
  
  //Borrar un Usuario
  Router.delete("/:usuariosID", async (solicitud, respuesta) => {
    const { Usuario } = solicitud.params;
    respuesta.json(Usuario.Borrar(solicitud.body.Usuario));
  });
  
  //Actualizar un Servicio
  Router.put("/:usuariosID", async (solicitud, respuesta) => {
    const { usuariosID } = solicitud.params;
    const { Usuario } = solicitud.body;
    respuesta.json(Usuario.Actualizar(usuariosID,Usuario));
  });
  
  module.exports = Router;
  