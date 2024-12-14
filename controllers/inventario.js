const Inventario = require ("../models/inventario")
exports.leerInventario = async(req,res)=>{
    try{
        const inventario = await Inventario.find({})
        res.status(200).json(inventario)       
    }catch(error){
        console.log(error)
        return res.status(500).send(error)
    }
}
exports.crear=async(req,res)=>{
    try{
        await Inventario.create({
            nombre: req.body.nombre,
            unidades: req.body.unidades
        })
        res.status(201).send("Elemento creado")
    }catch(error){
        return res.status(500).send(error)
    }
}

exports.leerElementoPorId = async (req,res)=>{
    try{
        const{id} =req.params
        const elemento = await Inventario.findById(id)
        res.json(elemento).status(200)
    }catch(error){
        console.error(error)
        return res.status(500).send(error)
    }

}