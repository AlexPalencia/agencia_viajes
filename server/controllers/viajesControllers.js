// se importa el modelo para los viajes
const Viaje = require('../models/Viajes');

exports.mostrarViajes = async (req,res) => {
    const viajes = await Viaje.findAll()
    res.render('viajes',{
        pagina: 'Proximos viajes',
        viajes
    });
}

exports.mostrarViaje = async (req,res) => {
    const viaje = await Viaje.findByPk(req.params.id)
    res.render('viaje',{
        pagina: "Proximo viaje",
        viaje
    });
}