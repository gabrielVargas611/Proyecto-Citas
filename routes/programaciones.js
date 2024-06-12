const express = require("express");

const ServicioProgramaciones = require("./../services/programaciones.js");
const Programaciones = new ServicioProgramaciones();

const Router = express.Router();

//Buscador de Programaciones
function listadoDeProgramaciones(programacionesId) {
    return Programaciones.Listar(programacionesId);
}

//Buscar todas las Programaciones
Router.get("/", async (solicitud, respuesta) => {
    const Programaciones = await listadoDeProgramaciones(solicitud.params.programacionesId);
    respuesta.json(Programaciones);
  });

//Buscar una Programacion en especifico
Router.get("/:programacionesId", async (solicitud, respuesta) => {
    const Programaciones = await listadoDeProgramaciones(solicitud.params.programacionesId);
    respuesta.json(Programaciones);
  });

//Crear de Programaciones
Router.post("/", async (solicitud, respuesta) => {
    const { Programacion } = solicitud.body;
    respuesta.json(Programacion.Agregar(solicitud.body.Programacion))
  });
  
  //Borrar una Programacion
  Router.delete("/:programacionesId", async (solicitud, respuesta) => {
    const { Programacion } = solicitud.params;
    respuesta.json(Programacion.Borrar(solicitud.body.Programacion));
  });
  
  //Actualizar una Provincias
  Router.put("/:programacionesId", async (solicitud, respuesta) => {
    const { programacionesId } = solicitud.params;
    const { Programacion } = solicitud.body;
    respuesta.json(Programacion.Actualizar(programacionesId,Programacion));
  });
  
  module.exports = Router;
  