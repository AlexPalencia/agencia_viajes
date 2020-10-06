const express = require('express');
const router = express.Router();

// se importan los controladores
const nosotroController = require('../controllers/nosotrosControllers');
const inicioController = require('../controllers/homeController');
const viajesController = require('../controllers/viajesControllers');
const testimonialesController = require('../controllers/testimonialesControllers');
module.exports = function() {
    // pagina de inicio
    router.get('/', inicioController.consultaInicio);
    
    router.get('/nosotros', nosotroController.infoNosotros);

    // se llama a toda la tabla en la BD
    router.get('/viajes', viajesController.mostrarViajes);
    
    // leemos los id de los viajes
    router.get('/viajes/:id', viajesController.mostrarViaje);

    // vista de teestimoniales
    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);

    // cuando envia los datos del formulario
    router.post('/testimoniales', testimonialesController.agregarTestimonial);

    return router;
}