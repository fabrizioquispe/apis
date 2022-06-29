ESTA APP ES SOBRE PELICULAS CON API CREADA CON NODE JS 
PARA PROBAR LOS METODOS SE UTILIZAN LOS SIGUIENTES:
GET: Obtener información.
POST: Agregar información.
PUT: Reemplazar la información.
PATCH: Actualizar alguna información.
DELETE: Borrar información.

npm i express morgan nodemon

Express es un framework de que nos permite escribir codigo de servidor

Morgan es un modelo que nos permite ver las peticiones que nos permite visualizarlos en consolas

Nodemon permite recargar lo que estamos haciendo sin necesidad de recargar la pagina o la consola , para poder utilizarlo nos dirigimos al package.json de nuestro proyecto en la seccion de scripts y creamos nuestro script 
"dev" : "nodemon src/iindex.js" y escribimos npm run dev

NOTA
EN CASO YA TENGAMOS UN SERVIDOR DEFINIDO EN EL SISTEMA IMPLEMENTAMOS EL SIGUIENTE COMANDO EN NUESTRAS CONFIGURACIONES DE RUTAS

app.set('port',process.env.PORT || numero de ruta);

CON EL SIGUIENTE COMANDO REALIZAMOS PETICIONES EN EL CLIENTE EN FORMATO JSONS
app.get('/',(req,res)=>{
    res.json({"Title" : "Hello World"});
});