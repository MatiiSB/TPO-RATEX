const express = require("express");
const router = express.Router();
const {Listas} = require('../models');
const { validateToken} = require ("../middlewares/AuthMiddleware")


router.get("/", async (req, res) =>{
    const listOfListas = await Listas.findAll()
    res.json(listOfListas);
});

router.post("/",  async (req,res)=>{
    const lista = req.body;
    await Listas.create(lista);
    res.json(lista);
});
router.post('/crearListas', async (req, res) => {
    const { mail } = req.body;
    if (!mail) {
        return res.status(400).send({ error: 'El campo mail es requerido.' });
    }
    try {
        const listas = [];
        for (let i = 1; i <= 3; i++) {
            listas.push({
                idUsuario: mail,
                idTipoLista: i,
                Peliculas: []
            });
        }
        await Listas.bulkCreate(listas);
        res.status(201).send({ message: 'Listas creadas exitosamente.' });
    } catch (error) {
        console.error('Error al crear listas:', error);
        res.status(500).send({ error: 'Error al crear listas.' });
    }
});

router.put('/agregarElemento', async (req, res) => {
    console.log("holas", req.body);
    try {
        const { mail, idTipoLista, watchData } = req.body;
        console.log("Datos recibidos:", { mail, idTipoLista, watchData });
        const lista = await Listas.findOne({ where: { idUsuario: mail, idTipoLista: idTipoLista } });
        if (lista) {
            lista.Peliculas.push(watchData);
            await lista.save();
            console.log("Lista actualizada:", lista);
            res.status(200).json(lista);
        } else {
            console.log("Lista no encontrada para:", { mail, idTipoLista });
            res.status(404).json({ error: 'Lista no encontrada' });
        }
    } catch (error) {
        console.error('Error al agregar elemento:', error);
        res.status(400).json({ error: error.message });
    }
});
module.exports = router;