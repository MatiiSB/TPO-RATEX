const express = require("express");
const router = express.Router();
const {TipoListas} = require('../models');



router.get("/", async (req, res) =>{
    const listOfTipoListas = await TipoListas.findAll()
    res.json(listOfTipoListas);
});

router.post("/", async (req,res)=>{
    const TipoLista = req.body;
    await TipoListas.create(TipoLista);
    res.json(TipoLista);
});

module.exports = router;