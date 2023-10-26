//Dependencia Commonjs
const express = require ('express')
const dotenv = require('dotenv')
const colors = require('colors')

//Dependencias de rutas 
const bootcampsRoutes = require('./routes/BootcampRoutes')

//Establecer archivo .env del proyecto
dotenv.config({
    path: './config/.env'
})

//Crear el Objeto app
const app = express();

//Adaptar a express para recibir datod Json
app.use(express.json)


//Vincular las rutas de bootcamps
app.use('/api/v1/devcamps/bootcamps', bootcampsRoutes)
//Primera prueba url del servidor
app.get('/prueba', 
        function(request, response){
            response.send("Buenoooos Diasss!😊")
});

/*===================================================================================
=====================================Uri de Bootcamps================================
=====================================================================================*/ 

//Traer todos los bootcamps
app.get('/api/v1/devcamp/bootcamps',
        (request, response)=>{
            response
                .status(200)
                .json({
                    "success": true,
                    "msg": "Mostrar todos los bootcamps"
                })
        })

//Traer bootcamps por id
app.get('/api/v1/devcamp/bootcamps/:id',
(request, response)=>{
    response
        .status(200)
        .json({
            "success": true,
            "msg": `Seleccionando bootcamp por Id ${request.params.id}`
        })
})

//Crear bootcamps
app.post('/api/v1/devcamp/bootcamps',
        (request, response)=>{
            response
                .status(201)
                .json({
                    "success": true,
                    "msg": "Crear bootcamp"
                })
        })

//Actualizar bootcamps por id
app.put('/api/v1/devcamp/bootcamps/:id',
(request, response)=>{
    response
        .status(200)
        .json({
            "success": true,
            "msg": `Actualizando bootcamp por Id ${request.params.id}`
        })
})

//Delete bootcamps por id
app.delete('/api/v1/devcamp/bootcamps/:id',
(request, response)=>{
    response
        .status(200)
        .json({
            "success": true,
            "msg": `Eliminando bootcamp por Id ${request.params.id}`
        })
})

/*===================================================================================
=====================================Uri de Curses================================
=====================================================================================*/ 

//Traer todos los curses
app.get('/api/v1/devcamp/curses',
        (request, response)=>{
            response
                .status(200)
                .json({
                    "success": true,
                    "msg": "Mostrar todos los curses"
                })
        })

//Traer curses por id
app.get('/api/v1/devcamp/curses/:id',
(request, response)=>{
    response
        .status(200)
        .json({
            "success": true,
            "msg": `Seleccionando curses por Id ${request.params.id}`
        })
})

//Crear curses
app.post('/api/v1/devcamp/curses',
        (request, response)=>{
            response
                .status(201)
                .json({
                    "success": true,
                    "msg": "Crear curse"
                })
        })

//Actualizar curses por id
app.put('/api/v1/devcamp/curses/:id',
(request, response)=>{
    response
        .status(200)
        .json({
            "success": true,
            "msg": `Actualizando curses por Id ${request.params.id}`
        })
})

//Delete curses por id
app.delete('/api/v1/devcamp/curses/:id',
(request, response)=>{
    response
        .status(200)
        .json({
            "success": true,
            "msg": `Eliminando curses por Id ${request.params.id}`
        })
})

/*===================================================================================
=====================================Uri de Reviews================================
=====================================================================================*/ 
//Traer todos los reviews
app.get('/api/v1/devcamp/reviews',
        (request, response)=>{
            response
                .status(200)
                .json({
                    "success": true,
                    "msg": "Mostrar todos los reviews"
                })
        })

//Traer reviews por id
app.get('/api/v1/devcamp/reviews/:id',
(request, response)=>{
    response
        .status(200)
        .json({
            "success": true,
            "msg": `Seleccionando reviews por Id ${request.params.id}`
        })
})

//Crear reviews
app.post('/api/v1/devcamp/reviews',
        (request, response)=>{
            response
                .status(201)
                .json({
                    "success": true,
                    "msg": "Crear review"
                })
        })

//Actualizar reviews por id
app.put('/api/v1/devcamp/reviews/:id',
(request, response)=>{
    response
        .status(200)
        .json({
            "success": true,
            "msg": `Actualizando reviews por Id ${request.params.id}`
        })
})

//Delete reviews por id
app.delete('/api/v1/devcamp/reviews/:id',
(request, response)=>{
    response
        .status(200)
        .json({
            "success": true,
            "msg": `Eliminando reviews por Id ${request.params.id}`
        })
})


/*===================================================================================
=====================================Uri de Users================================
=====================================================================================*/ 
//Traer todos los users
app.get('/api/v1/devcamp/users',
        (request, response)=>{
            response
                .status(200)
                .json({
                    "success": true,
                    "msg": "Mostrar todos los users"
                })
        })

//Traer users por id
app.get('/api/v1/devcamp/users/:id',
(request, response)=>{
    response
        .status(200)
        .json({
            "success": true,
            "msg": `Seleccionando users por Id ${request.params.id}`
        })
})

//Crear users
app.post('/api/v1/devcamp/users',
        (request, response)=>{
            response
                .status(201)
                .json({
                    "success": true,
                    "msg": "Crear user"
                })
        })

//Actualizar users por id
app.put('/api/v1/devcamp/users/:id',
(request, response)=>{
    response
        .status(200)
        .json({
            "success": true,
            "msg": `Actualizando users por Id ${request.params.id}`
        })
})

//Delete users por id
app.delete('/api/v1/devcamp/users/:id',
(request, response)=>{
    response
        .status(200)
        .json({
            "success": true,
            "msg": `Eliminando users por Id ${request.params.id}`
        })
})


//Restablecer Servidor
const PUERTO = 5000

//crear Servidor
app.listen(PUERTO,
    console.log("Servidor escuchando en el puerto:" +PUERTO))

//Establecer un servidor
const puerto = process.env.EXPRESS_PORT

app.listen(puerto,
    console.log(`Ya se prendió el server ${puerto}`,bgBlue.white))

