const express = require("express");

const ServicioUsuarios = require("./../services/usuarios.js");
const Usuarios = new ServicioUsuarios();

const Router = express.Router();

//Buscador de Usuarios
function listadoDeUsuarioss(UsuarioId) {
    return Usuarios.Listar(UsuarioId);
}

//Buscar todas los Usuarios
Router.get("/", async (solicitud, respuesta) => {
    const Usuarios = await listadoDeUsuarioss(solicitud.params.UsuarioId);
    respuesta.json(Usuarios);
  });

//Buscar un Usuario en especifico
Router.get("/:UsuarioId", async (solicitud, respuesta) => {
    const Usuarios = await listadoDeUsuarioss(solicitud.params.UsuarioId);
    respuesta.json(Usuarios);
  });

//Crear un Usuario
Router.post("/", async (solicitud, respuesta) => {
    const { Usuario } = solicitud.body;
    respuesta.json(Usuario.Agregar(solicitud.body.Usuario))
  });
  
  //Borrar un Usuario
  Router.delete("/:UsuarioId", async (solicitud, respuesta) => {
    const { Usuario } = solicitud.params;
    respuesta.json(Usuario.Borrar(solicitud.body.Usuario));
  });
  
  //Actualizar un Servicio
  Router.put("/:UsuarioId", async (solicitud, respuesta) => {
    const { UsuarioId } = solicitud.params;
    const { Usuario } = solicitud.body;
    respuesta.json(Usuario.Actualizar(UsuarioId,Usuario));
  });
  
  module.exports = Router;
  