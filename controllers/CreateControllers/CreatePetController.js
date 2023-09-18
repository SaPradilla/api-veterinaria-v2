const db = require('../../models')
const Mascota = db.mascotas

const CreatePet= async(req,res) =>{
    try{
        const {nombre,tipo_mascota,edad,raza,genero,vacunas,clienteId} = req.body

        const newPet = await Mascota.create({
            nombre:nombre,
            tipo_mascota:tipo_mascota,
            edad:edad,
            raza:raza,
            genero:genero,
            vacunas:vacunas,
            clienteId:clienteId
        })
        return res.status(200).json({
            msg:'Mascota creado correctamente.',
            Mascota:newPet
        })
    }catch(error){
        return res.status(500).json({
            msg:'Error al crear la Mascota',
            error: error
        })
    }
}
module.exports = CreatePet