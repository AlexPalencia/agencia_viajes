const Sequelize = require('sequelize');

// llama la base de datos
const db = require('../config/database');

// definir el modelo
const Testimoniales = db.define('testimoniales', {
    testimoniales_id: { 
        type: Sequelize.NUMBER,
        primaryKey: true,
    },
    nombre: {
        type: Sequelize.STRING,
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
})

module.exports = Testimoniales;