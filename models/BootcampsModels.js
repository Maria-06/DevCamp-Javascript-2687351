const mongoose = require("mongoose")

//Definir el modelo para bootcamps 
const BootcampSchema = mongoose.Schema({
    name:{
        type: String,
        unique: [true, "El nombre del bootcamp debe ser único"],
        required: [true, "El nombre del bootcamp es requerido"],
        maxlength: [50, "La longitud del nombre debe ser menor de 50 caracteres"]
    },
    phone:{
        type: Number,
        maxlength: [15,"La longitud del telefono debe ser minímo de 10 caracteres y máximo de 15"]
    },
    addres:{
        type: String,
        required: [true, "La dirección es requerida"]
    },
    topics:{
        type: [String],
        enum:[
            "Intenligencia Artificial",
            "FrontEnd/UX",
            "BackEnd",
            "DevOps"
        ]   
    },
    averageRating: Number,
    createdAt: Date
})

module.exports = mongoose.model('Bootcamps' ,
                                BootcampSchema)