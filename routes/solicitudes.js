const express = require("express");

const ServicioSolicitudes = require("./../services/solicitudes.js");
const Solicitudes = new ServicioSolicitudes();

const Router = express.Router();

//Buscador de Solicitudes
function listadoDeSolicitudes(SolicitudId) {
    return Solicitudes.Listar(SolicitudId);
}

//Buscar todas las Solicitudes
Router.get("/", async (solicitud, respuesta) => {
    const Solicitudes = await listadoDeSolicitudes(solicitud.params.SolicitudId);
    respuesta.json(Solicitudes);
  });

//Buscar una Solicitudes en especifico
Router.get("/:SolicitudId", async (solicitud, respuesta) => {
    const Solicitudes = await listadoDeSolicitudes(solicitud.params.SolicitudId);
    respuesta.json(Solicitudes);
  });

//Crear una Solicitud
Router.post("/", async (solicitud, respuesta) => {
    const { Solicitudes } = solicitud.body;
    respuesta.json(Solicitudes.Agregar(solicitud.body.Solicitudes))
  });
  
  //Borrar una Solicitud
  Router.delete("/:SolicitudId", async (solicitud, respuesta) => {
    const { Solicitudes } = solicitud.params;
    respuesta.json(Solicitudes.Borrar(solicitud.body.Solicitudes));
  });
  
  //Actualizar una Solicitud
  Router.put("/:SolicitudId", async (solicitud, respuesta) => {
    const { SolicitudId } = solicitud.params;
    const { Solicitudes } = solicitud.body;
    respuesta.json(Solicitudes.Actualizar(SolicitudId,Solicitudes));
  });
  
  module.exports = Router;
  