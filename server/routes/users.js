const express = require("express");
const router = express.Router();
const {Users} = require('../models');
const bcrypt = require('bcrypt')
const {sign} = require('jsonwebtoken')

router.post("/", async (req, res) => {
    const { mail, pass } = req.body;
    try {
        const existingUser = await Users.findOne({ where: { mail } });
        if (existingUser) {
            return res.status(400).json({ error: "usuario ya registrado" });
        }
        const hash = await bcrypt.hash(pass, 10);
        await Users.create({
            mail: mail,
            pass: hash
        });
        res.json("SUCCESS");
    } catch (error) {
        alert("usuario ya creado")
        res.status(500).json({ error: "Ha ocurrido un error al registrar el usuario" });
    }
});

router.post('/login',async (req,res)=>{
    const {mail, pass} = req.body;
    const user = await Users.findOne({where: {mail:mail}});
    if (!user){ res.json({error:"Usuario no existe"});
}else{  
    bcrypt.compare(pass, user.pass).then((match)=>{
        if(!match){
            res.json({error: "Contraseña o Usuario Erroneo"});}
            else{
        const accessToken = sign({mail:user.mail, id: user.id}, "secretitouwu" )
        res.json(accessToken);
        }
    });
    }
});


module.exports = router