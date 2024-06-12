const express = require("express");

const ServicioSolicitantes = require("./../services/solicitantes.js");
const Solicitantes = new ServicioSolicitantes();

const Router = express.Router();

//Buscador de Servicios
function listadoDeSolicitantes(solicitantesId) {
    return Solicitantes.Listar(solicitantesId);
}

//Buscar todas los Solicitantes
Router.get("/", async (solicitud, respuesta) => {
    const Solicitantes = await listadoDeSolicitantes(solicitud.params.solicitantesId);
    respuesta.json(Solicitantes);
  });

//Buscar un Solicitante en especifico
Router.get("/:solicitantesId", async (solicitud, respuesta) => {
    const Solicitantes = await listadoDeSolicitantes(solicitud.params.solicitantesId);
    respuesta.json(Solicitantes);
  });

//Crear un Solicitante
Router.post("/", async (solicitud, respuesta) => {
    const { Solicitantes } = solicitud.body;
    respuesta.json(Solicitantes.Agregar(solicitud.body.Solicitantes))
  });
  
  //Borrar un Solicitante
  Router.delete("/:solicitantesId", async (solicitud, respuesta) => {
    const { Solicitantes } = solicitud.params;
    respuesta.json(Solicitantes.Borrar(solicitud.body.Solicitantes));
  });
  
  //Actualizar un Solicitante
  Router.put("/:solicitantesId", async (solicitud, respuesta) => {
    const { solicitantesId } = solicitud.params;
    const { Solicitantes } = solicitud.body;
    respuesta.json(Servicios.Actualizar(solicitantesId,Solicitantes));
  });
  
  module.exports = Router;
  