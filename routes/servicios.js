const express = require("express");

const ServicioServicios = require("./../services/servicios.js");
const Servicios = new ServicioServicios();

const Router = express.Router();

//Buscador de Servicios
function listadoDeServicios(ServicioId) {
    return Servicios.Listar(ServicioId);
}

//Buscar todas los Servicios
Router.get("/", async (solicitud, respuesta) => {
    const Servicios = await listadoDeServicios(solicitud.params.ServicioId);
    respuesta.json(Servicios);
  });

//Buscar un Servicio en especifico
Router.get("/:ServicioId", async (solicitud, respuesta) => {
    const Servicios = await listadoDeServicios(solicitud.params.ServicioId);
    respuesta.json(Servicios);
  });

//Crear un Servicio
Router.post("/", async (solicitud, respuesta) => {
    const { Servicios } = solicitud.body;
    respuesta.json(Servicios.Agregar(solicitud.body.Servicio))
  });
  
  //Borrar un Servicio
  Router.delete("/:ServicioId", async (solicitud, respuesta) => {
    const { Servicios } = solicitud.params;
    respuesta.json(Servicios.Borrar(solicitud.body.Servicio));
  });
  
  //Actualizar un Servicio
  Router.put("/:ServicioId", async (solicitud, respuesta) => {
    const { ServicioId } = solicitud.params;
    const { Servicios } = solicitud.body;
    respuesta.json(Servicios.Actualizar(ServicioId,Servicios));
  });
  
  module.exports = Router;
  