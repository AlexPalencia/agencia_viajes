const Sequelize = require('sequelize');

// base de datos
const db = require('../config/database');

// definir el modelo
const Viaje = db.define('viaje',{
    viajes_id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
    titulo: {
        type: Sequelize.STRING
    },
    precio: {
        type: Sequelize.STRING
    },
    fecha_ida: {
        type: Sequelize.DATE
    },
    fecha_vuelta: {
        type: Sequelize.DATE
    },
    imagen: {
        type: Sequelize.STRING
    },
    descripcion: {
        type: Sequelize.STRING
    },
    disponibles: {
        type: Sequelize.STRING
    },

    
});

module.exports = Viaje;