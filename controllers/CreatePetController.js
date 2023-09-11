const db = require('../models')
const perfilMascota = db.mascota

const CreatePetProfile = async(req,res) =>{
    try{
        const {medicamentos,nombre,numero_contacto,tipo_mascota,edad,raza,genero,tamaño,patologias,peso,tratamiento,formula_medica,diagnostico,vacunas,clienteId} = req.body

        const newPetProfile = await perfilMascota.create({
            nombre:nombre,
            numero_contacto:numero_contacto,
            tipo_mascota:tipo_mascota,
            edad:edad,
            raza:raza,
            genero:genero,
            peso:peso,
            formula_medica:formula_medica,
            diagnostico:diagnostico,
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