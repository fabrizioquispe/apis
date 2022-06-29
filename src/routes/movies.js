const {Router}  = require('express');
const router = Router();

//importamos sample.json datos
const movies = require('../movies.json');

//Creamos la ruta de movies
router.get('/',(req,res)=>{
    res.json(movies);
});

router.post('/',(req,res)=> {
    console.log(req.body);
    res.send('recived');
});

module.exports = router;