const mongoose= require("mongoose")

//función de conexión
async function conectDB(){
    const conn = await mongoose.connect(process.env.MONGO_URL)
    console.log('Conectado a la DB'.bgBlue.white)
}

module.export = conectDB
