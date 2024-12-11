# Proyecto Inventario
### Inicio del proyecto 
abre la terminal en la carpeta donde vas a guardar el proyecto, y pon los siguiente comando:
```
mkdie proyecto-inventario
cd proyecto-inventario
```
```
touch .env .gitignore index.js
```
Instalamos las dependencias, recuerden np es el manejador de paquetes de node o node package manage
```
npm install express mongoose dotenv cors
```
```
npm install --save-dev nodemon
```
y en el gitignore copian
```
node_modules
.env
```

y ahora vamos a subir el codigo a Github
### Hola mundo en Node.js
ahora vamos a hacer un hola mundo en node.js, para eso vamos a poner el siguiente codigo en index.js

```
const express = require("express")

const app = express()

const PORT = 3006

app.set("port",PORT)
app.get("/",(req,res)=>{
    res.send("hola mundo")

})
app.listen(PORT,()=>{
    console.log(`server running in port ${PORT}`)
})
```
Vamos a explicar cada una de las lineas
- const express = require("express")
Estamos asignando una variablle de nombre express la cual va a contener informacion de el paquete express instalado anteriormente
- const app = express()
creamos una variable de nombre app y definimos como vamos a llamar la informaicon del paquete express para usarla
- const PORT = 3006
creamos una variable de nombre port y le definimos un puerto
- app.set("port",PORT)
con el set configuramos el puerto de la app
- app.get("/",
tenemos una ruta y un verbo http con la cual definiremos la funcion que se ejecuta
- (req,res)=>{
  - req:La informacion que recibo del cliente
  - res:La informacion que le voy a mostrar al cliente (respuesta)
- res.send("hola mundo")
estoy enviando como respuesta al cliente un "hola mundo"
- })
cerramos la funcion que ejecutdos con el app.get
- app.listen(PORT,()=>{
estamos escuchando el puerto 
- console.log(`server running in port ${PORT}`)
Me envio un mensaje para saber que todo esta bien

### Ruta y controladores 
Primera creamos las carpetas con
```
mkdir controllers models routes
```


Para la carpeta de routes generamos un documento llamado holaRoutes.js en la cual ingresamos el siguiente codigo: 

```
const express = require("express")
const router = express.Router()
const holaControllers = require("../controllers/holaController")
router.get("/",holaControllers.holaMundo)
module.exports=router
```

ahora explicaremos linea por linea

- const express = require("express")

Estamos asignando una variablle de nombre express la cual va a contener informacion de el paquete express instalado anteriormente

- const router = express.Router()

Traemos una parte de la informacion del paquete de express (Router) y se la asignamos a una variable llamada router 

-







