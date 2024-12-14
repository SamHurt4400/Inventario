const express = require("express")
const mongoose =require("mongoose")
require("dotenv").config()

const holaRoutes = require("./routes/holaRoutes")
const inventarioRoutes = require("./routes/inventario")
require("dotenv").config()
const app = express()
const PORT = 3006
app.set("port",PORT)

app.use(express.json())
app.use("/api/hola",holaRoutes)//
app.use("/api/inventario",inventarioRoutes)

mongoose.connect(process.env.MONGO_URI)
.then (console.log ("Connect to BD"))
.catch(err=> console.error(err))

app.get("/",(req,res)=>{
    res.send("hola mundo")

})
app.listen(PORT,()=>{
    console.log(`server running in port ${PORT}`)
})