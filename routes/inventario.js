const express=require("express")
const {leerInventario,crear,leerElementoPorId} = require("../controllers/inventario")
const router = express.Router()


//router.get("/",(req,res)=>{
//    console.log("hola desde routes inventario")
//    res.send("hola desde routes inventario")
//})
router.get("/",leerInventario)
router.post("/", crear)
router.get("/:id", leerElementoPorId)


module.exports=router