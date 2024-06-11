

function routerAPI(app){
    //Ruta Programaciones
    app.use('/Programaciones',);

    //Ruta Servicios
    app.use('/Servicios',);

    //Ruta Solicitantes
    app.use('/Solicitantes',);
    
    //Ruta Solicitudes
    app.use('/Solicitudes',);

    //Ruta Usuarios
    app.use('/Usuarios',);
}


module.exports = routerAPI;