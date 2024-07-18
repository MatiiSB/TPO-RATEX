const express = require ('express')
const app = express()
const cors = require('cors')

//middlewares
app.use(express.json())
app.use(cors());

const db = require ('./models')

//Routers


//users
const userRouter = require ("./routes/users")
app.use("/users",userRouter);

//listas
const listasRouter = require("./routes/listas")
app.use("/listas", listasRouter)

db.sequelize.sync().then(()=>{
    app.listen (3006, ()=> {
        console.log("Utilizando puerto 3006")
    })
})
