const Sequelize = require('sequelize');
// para el ambiente en desarrollo y local
require('dotenv').config({path:'variables.env'});

module.exports = new Sequelize(process.env.DB_NOMBRE, process.env.DB_USER, process.env.DB_PASS,{
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: 0

})