const express = require("express");
const router = express.Router();
const {Users} = require('../models');
const bcrypt = require('bcrypt')

/*
router.get("/", async (req, res) =>{
    const listOfUsers = await Users.findAll()
    res.json(listOfUsers);
});
*/
router.post("/", async (req,res)=>{
    const {mail, pass} = req.body;
    bcrypt.hash(pass, 10).then((hash)=>{
        Users.create({
            mail:mail,
            pass:hash
        });
    });
    res.json("SUCCESS");
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
        res.json("LOGEADO");}
    });
    }
});


module.exports = router