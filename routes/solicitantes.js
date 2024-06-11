const express = require("express");

const ServicioSolicitantes = require("./../services/solicitantes.js");
const Solicitantes = new ServicioSolicitantes();

const Router = express.Router();

//Buscador de Servicios
function listadoDeSolicitantes(SolicitanteId) {
    return Solicitantes.Listar(SolicitanteId);
}

//Buscar todas los Solicitantes
Router.get("/", async (solicitud, respuesta) => {
    const Solicitantes = await listadoDeSolicitantes(solicitud.params.SolicitanteId);
    respuesta.json(Solicitantes);
  });

//Buscar un Solicitante en especifico
Router.get("/:SolicitanteId", async (solicitud, respuesta) => {
    const Solicitantes = await listadoDeSolicitantes(solicitud.params.SolicitanteId);
    respuesta.json(Solicitantes);
  });

//Crear un Solicitante
Router.post("/", async (solicitud, respuesta) => {
    const { Solicitantes } = solicitud.body;
    respuesta.json(Solicitantes.Agregar(solicitud.body.Solicitantes))
  });
  
  //Borrar un Solicitante
  Router.delete("/:SolicitanteId", async (solicitud, respuesta) => {
    const { Solicitantes } = solicitud.params;
    respuesta.json(Solicitantes.Borrar(solicitud.body.Solicitantes));
  });
  
  //Actualizar un Solicitante
  Router.put("/:SolicitanteId", async (solicitud, respuesta) => {
    const { SolicitanteId } = solicitud.params;
    const { Solicitantes } = solicitud.body;
    respuesta.json(Servicios.Actualizar(SolicitanteId,Solicitantes));
  });
  
  module.exports = Router;
  