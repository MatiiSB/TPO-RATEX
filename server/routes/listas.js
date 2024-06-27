const express = require("express");
const router = express.Router();
const {Listas} = require('../models');



router.get("/", async (req, res) =>{
    const listOfListas = await Listas.findAll()
    res.json(listOfListas);
});

router.post("/", async (req,res)=>{
    const lista = req.body;
    await Listas.create(lista);
    res.json(lista);
});

module.exports = router;