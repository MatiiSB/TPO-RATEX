const express = require("express");
const router = express.Router();
const {Listas} = require('../models');
const {validateToken} = require ("../middlewares/AuthMiddleware")


router.get("/", validateToken, async (req, res) =>{
    const listOfListas = await Listas.findAll()
    res.json(listOfListas);
});

router.get("/WatchList", async (req, res) => {
    const { mail } = req.query;
    try {
        const listOfListas = await Listas.findAll({ where: { idTipoLista: 1, idUsuario: mail } });
        res.json(listOfListas);
    } catch (error) {
        console.error("Error al obtener la lista de películas", error);
        res.status(500).json({ error: "Error al obtener la lista de películas" });
    }
});
router.get("/WatchList", async (req, res) => {
    const { mail } = req.query;
    try {
        const listOfListas = await Listas.findAll({ where: { idTipoLista: 1, idUsuario: mail } });
        res.json(listOfListas);
    } catch (error) {
        console.error("Error al obtener la lista de películas", error);
        res.status(500).json({ error: "Error al obtener la lista de películas" });
    }
});
router.get("/Favoritas", async (req, res) => {
    const { mail } = req.query;
    try {
        const listOfListas = await Listas.findAll({ where: { idTipoLista: 2, idUsuario: mail } });
        res.json(listOfListas);
    } catch (error) {
        console.error("Error al obtener la lista de películas", error);
        res.status(500).json({ error: "Error al obtener la lista de películas" });
    }
});
router.get("/Vistas", async (req, res) => {
    const { mail } = req.query;
    try {
        const listOfListas = await Listas.findAll({ where: { idTipoLista: 3, idUsuario: mail } });
        res.json(listOfListas);
    } catch (error) {
        console.error("Error al obtener la lista de películas", error);
        res.status(500).json({ error: "Error al obtener la lista de películas" });
    }
});

//eliminar
router.post("/EliminarPelicula", async (req, res) =>{
    const pelicula = req.body
    console.log(pelicula)
    const listOfListas = await Listas.findOne({where:{idTipoLista : pelicula.idTipoLista, idUsuario : pelicula.idUsuario, idPeliculas: pelicula.idPeliculas }})
    await listOfListas.destroy();
    console.log("pelicula destruida");
    res.json(listOfListas);
});

router.post("/", validateToken,  async (req,res)=>{
    const lista = req.body;
    const VerificarSiEnLista = await Listas.findOne({where:{idTipoLista : lista.idTipoLista, idUsuario : lista.idUsuario, idPeliculas: lista.idPeliculas }})
    if (!VerificarSiEnLista){
        await Listas.create(lista);
        res.json(lista);
        console.log("Exito")
    }else{
        console.log("Repetido")
        res.json(lista)
    }
});
module.exports = router;