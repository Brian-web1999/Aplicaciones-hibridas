
import express from "express"// Importamos express
import path from "path"
import { readFile } from "fs/promises"
import { crearListadoPeliculas, crearPagina } from "./utils/utils.js"
const app = express()

// let contador = 0

// app.use(express.static("public") ) // Te devuelve todo el CSS y las IMAGENES de la carpeta "public" (milware)
app.use(express.urlencoded({extended: true})) // Recbimos toda la informacion de la solicitud del formulario en la terminal

app.get ("/",async(req, res) =>{
    readFile (path.resolve("data/productos.json"), {encoding: 'utf8'})
    .then( (peliculas) => res.send( crearPagina ("Peliculas", crearListadoPeliculas (JSON.parse (peliculas)))) )
    .catch( (err) => res.send(err) )
})





app.get("/saludo", (req, res) => {
    console.log(req.query.mensaje) // Extrae la informacion recibida del form. de contacto.html
})

app.post("/saludo", (req, res) =>{
    console.log(req.body)
})

// app.get ("/contador",(request, response) =>{
//     response.send (`<h1>${contador++}</h1>`) // Mandomos un mensaje al navegador (directamente)
// })

app.listen(2024, () => console.log("Servidor Funcionando")); // Puerto desde donde funciona