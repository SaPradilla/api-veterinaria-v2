const db = require('../models')
const perfilMascota = db.mascotas

const UpdatePetProfile = async(req,res) =>{
    try{
        const {id} = req.params
        const {medicamentos,nombre,numero_contacto,tipo_mascota,edad,raza,genero,tamaño,patologias,peso,tratamiento,formula_medica,diagnostico,vacunas,clienteId} = req.body

        const updatePetProfile = await perfilMascota.update({
            medicamentos:medicamentos,
            nombre:nombre,
            numero_contacto:numero_contacto,
            tipo_mascota:tipo_mascota,
            edad:edad,
            raza:raza,
            genero:genero,
            tamaño:tamaño,
            patologias:patologias,
            peso:peso,
            tratamiento:tratamiento,
            formula_medica:formula_medica,
            diagnostico:diagnostico,
            vacunas:vacunas,
            clienteId:clienteId
        },{
            where:{
                id
            }
        })
        if(updatePetProfile != 0){
            return res.status(200).json({
                msg:'Perfil de la mascota editada correctamente.',
            })
        }else{
            return res.status(404).json({
                msg:'Id del perfil de la mascota no se encontró, No se pudo editar correctamente.'
            })
        }
    }catch(error){
        return res.status(500).json({
            msg:'Error al crear el editar de la mascota',
            error: error
        })
    }
}
module.exports = UpdatePetProfile