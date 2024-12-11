const express = require("express")
const router = express.Router()
const holaControllers = require("../controllers/holaController")
router.get("/",holaControllers.holaMundo)

//router.get("/router/",(req,res)=>{
//    console.log("hola")
//    res.send("Hola desde rutas")
//})

module.exports=router