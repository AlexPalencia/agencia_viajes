// se importa el modelo para los testimoniales
const Testimonial = require('../models/Testimoniales');

exports.mostrarTestimoniales = async (req,res) => {
    const testimoniales = await Testimonial.findAll()
    res.render('testimoniales', {
        pagina: "Testimoniales",
        testimoniales
    });
}

exports.agregarTestimonial = async (req, res) => {
    // validamos que los campos estén llenos
    let {nombre, correo, mensaje} = req.body;

    // se crean mensajes de validacion
    let errores = [];
    if(!nombre) {
        errores.push({"mensaje":"El nombre es requerido"})
    }
    if(!correo) {
        errores.push({"mensaje":"El correo es requerido"})
    }
    if(!mensaje) {
        errores.push({"mensaje":"El mensaje es requerido"})
    }

    // revisar por los errores
    if(errores.length > 0){
        // muestra la vista con errores
        const testimoniales = await Testimonial.findAll()
        res.render('testimoniales', {
            errores,
            nombre,
            correo,
            mensaje,
            pagina: "Testimoniales",
            testimoniales
        })
    } else {
        // guarda en la BD
        Testimonial.create({
            nombre,
            correo,
            mensaje
        })
        .then(testimonial => res.redirect('/testimoniales'))
            .catch(error => console.log(error))
    }
}