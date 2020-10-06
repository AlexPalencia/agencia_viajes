// se importa el modelo para los viajes
const Viaje = require('../models/Viajes');
// se importa el modelo para los testimoniales
const Testimonial = require('../models/Testimoniales');

exports.consultaInicio = async (req,res) => {

    // diferentes consultas que se guardan en el arreglo
    const viajes = await Viaje.findAll({ limit: 3 });
    const testimoniales = await Testimonial.findAll({ limit: 3 });

    res.render('index',{
        pagina: 'Inicio',
        clase: 'home',
        viajes,
        testimoniales
    })
}