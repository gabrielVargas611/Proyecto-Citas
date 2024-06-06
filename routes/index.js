const routerProvincias = require('./provincias.js');

function routerAPI(app){
    app.use('/provincias',routerProvincias);
}

module.exports = routerAPI;