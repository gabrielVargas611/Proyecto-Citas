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
    const { Inicio, Final, Servicio } = solicitud.body;
    respuesta.json(Programaciones.Agregar(solicitud.body.Inicio,
      solicitud.body.Final,
      solicitud.body.Servicio
    ))
  });
  
  //Borrar una Programacion
  Router.delete("/:programacionesId", async (solicitud, respuesta) => {
    respuesta.json(Programaciones.Borrar(solicitud.params.programacionesId));
  });
  
  //Actualizar una Provincias
  Router.put("/:programacionesId", async (solicitud, respuesta) => {
    const { programacionesId } = solicitud.params;
    const { Inicio, Final, Servicio } = solicitud.body;
    respuesta.json(Programaciones.Actualizar(programacionesId,Inicio,Final,Servicio));
  });
  
  module.exports = Router;
  