const express = require("express");

const ServicioProvincias = require("./../services/programaciones.js");
const Programaciones = new ServicioProgramaciones();

const Router = express.Router();

//Buscador de Programaciones
function listadoDeProgramaciones(ProgramacionId) {
    return Programaciones.Listar(ProgramacionId);
}

//Buscar todas las Programaciones
Router.get("/", async (solicitud, respuesta) => {
    const Programaciones = await listadoDeProgramaciones(solicitud.params.ProgramacionId);
    respuesta.json(Programaciones);
  });

//Buscar una Programacion en especifico
Router.get("/:ProgramacionId", async (solicitud, respuesta) => {
    const Programaciones = await listadoDeProgramaciones(solicitud.params.ProgramacionId);
    respuesta.json(Programaciones);
  });

//Crear de Programaciones
Router.post("/", async (solicitud, respuesta) => {
    const { Programacion } = solicitud.body;
    respuesta.json(Programacion.Agregar(solicitud.body.Programacion))
  });
  
  //Borrar una Programacion
  Router.delete("/:ProgramacionId", async (solicitud, respuesta) => {
    const { Programacion } = solicitud.params;
    respuesta.json(Programacion.Borrar(solicitud.body.Programacion));
  });
  
  //Actualizar una Provincias
  Router.put("/:ProgramacionId", async (solicitud, respuesta) => {
    const { ProgramacionId } = solicitud.params;
    const { Programacion } = solicitud.body;
    respuesta.json(Programacion.Actualizar(ProgramacionId,Programacion));
  });
  
  module.exports = Router;
  