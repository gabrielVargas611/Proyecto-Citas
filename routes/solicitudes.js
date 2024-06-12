const express = require("express");

const ServicioSolicitudes = require("./../services/solicitudes.js");
const Solicitudes = new ServicioSolicitudes();

const Router = express.Router();

//Buscador de Solicitudes
function listadoDeSolicitudes(solicitudesId) {
    return Solicitudes.Listar(solicitudesId);
}

//Buscar todas las Solicitudes
Router.get("/", async (solicitud, respuesta) => {
    const Solicitudes = await listadoDeSolicitudes(solicitud.params.solicitudesId);
    respuesta.json(Solicitudes);
  });

//Buscar una Solicitudes en especifico
Router.get("/:solicitudesId", async (solicitud, respuesta) => {
    const Solicitudes = await listadoDeSolicitudes(solicitud.params.solicitudesId);
    respuesta.json(Solicitudes);
  });

//Crear una Solicitud
Router.post("/", async (solicitud, respuesta) => {
    const { Solicitudes } = solicitud.body;
    respuesta.json(Solicitudes.Agregar(solicitud.body.Solicitudes))
  });
  
  //Borrar una Solicitud
  Router.delete("/:solicitudesId", async (solicitud, respuesta) => {
    const { Solicitudes } = solicitud.params;
    respuesta.json(Solicitudes.Borrar(solicitud.body.Solicitudes));
  });
  
  //Actualizar una Solicitud
  Router.put("/:solicitudesId", async (solicitud, respuesta) => {
    const { solicitudesId } = solicitud.params;
    const { Solicitudes } = solicitud.body;
    respuesta.json(Solicitudes.Actualizar(solicitudesId,Solicitudes));
  });
  
  module.exports = Router;
  