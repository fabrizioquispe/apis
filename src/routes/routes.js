//Creacion de la api rest ROUTES
const {Router} = require('express');
const router = Router();

router.get('/test',(req,res)=>{
    //res.json({"Title" : "Hello World"});
    const data ={
        "name": "Fabrizio Quispe",
        "dni" : "76122109",
        "correo" :"fabrizioquispe1900@gmail.com"
    };
    //enviamos los datos del jason
    res.json(data);
});

//Exportamos el modulo

module.exports = router;
