
const {verify} = require("jsonwebtoken")
const validateToken= (req, res, next)=>{
    const accessToken = req.header("acessToken")
    if(!accessToken){

    return res.json({error: "usarios no logeado"})
    }
    try{
        const validToken = verify(accessToken, "secretitouwu")
        if (validToken){
            return next();
        }
    }catch (err){
        return res.json ({error: err})
    }
};
module.exports = {validateToken};