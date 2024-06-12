const express = require("express");

const ServicioServicios = require("./../services/servicios.js");
const Servicios = new ServicioServicios();

const Router = express.Router();

//Buscador de Servicios
function listadoDeServicios(serviciosId) {
    return Servicios.Listar(serviciosId);
}

//Buscar todas los Servicios
Router.get("/", async (solicitud, respuesta) => {
    const Servicios = await listadoDeServicios(solicitud.params.serviciosId);
    respuesta.json(Servicios);
  });

//Buscar un Servicio en especifico
Router.get("/:serviciosId", async (solicitud, respuesta) => {
    const Servicios = await listadoDeServicios(solicitud.params.serviciosId);
    respuesta.json(Servicios);
  });

//Crear un Servicio
Router.post("/", async (solicitud, respuesta) => {
    const { Servicio, Descripcion, Telefono, Correo, Precio, Experto } = solicitud.body;
    respuesta.json(Servicios.Agregar(solicitud.body.Servicio,
      solicitud.body.Descripcion,
      solicitud.body.Telefono,
      solicitud.body.Correo,
      solicitud.body.Precio,
      solicitud.body.Experto
    ))
  });
  
  //Borrar un Servicio
  Router.delete("/:serviciosId", async (solicitud, respuesta) => {
    const { serviciosId } = solicitud.params;
    respuesta.json(Servicios.Borrar(solicitud.body.serviciosId));
  });
  
  //Actualizar un Servicio
  Router.put("/:serviciosId", async (solicitud, respuesta) => {
    const { serviciosId } = solicitud.params;
    const { Servicio, Descripcion, Telefono, Correo, Precio, Experto } = solicitud.body;
    respuesta.json(Servicios.Actualizar(serviciosId,Servicio,Descripcion,Telefono,Correo,Precio,Experto));
  });
  
  module.exports = Router;
  