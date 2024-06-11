const routerprogramaciones = require('./programaciones.js');

const routerservicios = require('./servicios.js');

const routersolicitantes = require('./solicitantes.js');

const routersolicitudes = require('./solicitudes.js');

const routerusuarios = require('./usuarios.js');

function routerAPI(app){
    //Ruta Programaciones
    app.use('/Programaciones', routerprogramaciones);

    //Ruta Servicios
    app.use('/Servicios', routerservicios);

    //Ruta Solicitantes
    app.use('/Solicitantes',routersolicitantes);
    
    //Ruta Solicitudes
    app.use('/Solicitudes',routersolicitudes);

    //Ruta Usuarios
    app.use('/Usuarios',routerusuarios);
}


module.exports = routerAPI;