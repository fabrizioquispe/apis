//Requerimos express
const express = require('express');

//Requerimos morgan
const morgan = require('morgan');
//Utilizamos el framework express con la constante APP
const app = express();

//Configuraciones de servidor
app.set('port', 3000);


//Peticiones del servidor local utilizando morgan
app.use(morgan(`dev`));

//Este un metodo de express que nos permite enviar datos utilizando solo archivos JSON
app.use(express.json());
app.use(express.urlencoded({extended:false}));

//Rutaas de routes
app.use(require('./routes/routes'));
app.use('/api/movies',require('./routes/movies'));

//El servidor va escuchar en el puerto 3000 y enviara un mensaje de consola 
app.listen(3000,()=>{
    console.log(`Server on port ${app.get('port')}`);
});

