const db = require('../models')
const perfilMascota = db.mascotas

const CreatePetProfile = async(req,res) =>{
    try{
        const {nombre,tipo_mascota,edad,raza,genero,diagnosticoId,vacunas,clienteId} = req.body

        const newPetProfile = await perfilMascota.create({
            nombre:nombre,
            tipo_mascota:tipo_mascota,
            edad:edad,
            raza:raza,
            genero:genero,
            diagnosticoId:diagnosticoId,
            vacunas:vacunas,
            clienteId:clienteId
        })
        return res.status(200).json({
            msg:'Perfil de la mascota creado correctamente.',
            PerfilMascota:newPetProfile
        })
    }catch(error){
        return res.status(500).json({
            msg:'Error al crear el perfil de la mascota',
            error: error
        })
    }
}
module.exports = CreatePetProfile