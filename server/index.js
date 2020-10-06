// inportar express
const express = require('express');
const path = require('path');
// para los leer formularios
const bodyParser = require('body-parser')

const routes = require('./routes');

const configs = require('./config');
// para el ambiente en desarrollo y local
require('dotenv').config({path:'variables.env'});
// db.authenticate()
//     .then(() => console.log('DB contectada'))
//     .catch(error => console.log(error));
// configurar express
const app = express();

// habilitar pug
app.set('view engine','pug');

// añadir las vistas
app.set('views', path.join(__dirname, './views'));

// cargar carpeta estatica llamada public
app.use(express.static('public'));

// validar si estamos en desarrollo o prodccion
const config = configs[app.get('env')];

// creamos la vaiable del sitio web
app.locals.titulo = config.nombresito;

// muestra el año actual y genra la ruta
app.use((req,res, next)=>{
    const fecha = new Date();
    res.locals.fechaActual = fecha.getFullYear();
    res.locals.ruta = req.path;
    return next();
})

// se ejecuta el bodyParser
app.use(bodyParser.urlencoded({extended: true}));
bodyParser
// cargar las rutas
app.use('/', routes());

// puerto y host para la app para desplegar en Heroku
const host = process.env.HOST || '0.0.0.0';
const port = process.eventNames.PORT || 3000;
app.listen(port,host,() => {
    console.log("funciona :v");
});
// trabajdno en local
// app.listen(3000);