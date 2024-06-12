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
    const { Solicitud, Fecha, Servicio, Solicitante } = solicitud.body;
    respuesta.json(Solicitudes.Agregar(solicitud.body.Solicitud,
      solicitud.body.Fecha,
      solicitud.body.Servicio,
      solicitud.body.Solicitante
    ))
  });
  
  //Borrar una Solicitud
  Router.delete("/:solicitudesId", async (solicitud, respuesta) => {
    const { solicitudesId } = solicitud.params;
    respuesta.json(Solicitudes.Borrar(solicitud.body.solicitudesId));
  });
  
  //Actualizar una Solicitud
  Router.put("/:solicitudesId", async (solicitud, respuesta) => {
    const { solicitudesId } = solicitud.params;
    const { Solicitud, Fecha, Servicio, Solicitante } = solicitud.body;
    respuesta.json(Solicitudes.Actualizar(solicitudesId,Solicitud, Fecha, Servicio, Solicitante));
  });
  
  module.exports = Router;
  