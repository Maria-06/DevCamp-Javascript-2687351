const express = require("express")
const bootcampModel = require('../models/BootcampsModels')
//Crear variable para definir las rutas por aparte
const router = express.Router()

/*===================================================================================
=====================================Uri de Bootcamps================================
=====================================================================================*/ 

//Traer todos los bootcamps
router.get('/api/v1/devcamp/bootcamps',
        (request, response)=>{
            response
                .status(200)
                .json({
                    "success": true,
                    "msg": "Mostrar todos los bootcamps"
                })
        })

//Traer bootcamps por id
router.get('/api/v1/devcamp/bootcamps/:id',
(request, response)=>{
    response
        .status(200)
        .json({
            "success": true,
            "msg": `Seleccionando bootcamp por Id ${request.params.id}`
        })
})

//Crear bootcamps
router.post('/api/v1/devcamp/bootcamps',
        async (request, response)=>{
            //Crear nuevo bootcamp
            //const bootcamp = bootcampModel.
            //                    create( request.body)
            //
            response
                .status(201)
                .json({
                    "success": true,
                    "data": request.body
                })
        })

//Actualizar bootcamps por id
router.put('/api/v1/devcamp/bootcamps/:id',
(request, response)=>{
    response
        .status(200)
        .json({
            "success": true,
            "msg": `Actualizando bootcamp por Id ${request.params.id}`
        })
})

//Delete bootcamps por id
router.delete('/api/v1/devcamp/bootcamps/:id',
(request, response)=>{
    response
        .status(200)
        .json({
            "success": true,
            "msg": `Eliminando bootcamp por Id ${request.params.id}`
        })
})


module.exports = router