const db = require('../models')
const perfilMascota = db.perfil_mascota

const ReadAllPetProfile = async(req,res)=>{
    try{
        const Pet = await perfilMascota.findAll({
            include:[{
                model:db.cliente
            },{
                model:db.citas_medica
            },{
                model:db.historias_clinica
            },{
                model:db.cirugia
            },
            // ,{
            //     model:db.rastreo
            // },{
            {
                model:db.carnet
            }
        ]

        })
        if(Pet.length !== 0){
            return res.status(200).json({
                msg:'Perfiles de mascotas visualizados correctamente',
                PerfilMascota: Pet
            })
        }else{
            return res.status(404).json({
                msg:'No se encontraron perfiles de mascota.'
            })
        }
    } catch(error){
        
        return res.status(500).json({
            msg:'Hubo un error al visualizar los perfiles de las mascotas.',
            error:error
        })
    }
}
const ReadIdPetProfile = async(req,res)=>{
    try{
        const {id} = req.params

        const Pet = await perfilMascota.findAll({
            where:{
                id:id
            },
            include:[{
                model:db.cliente
            },{
                model:db.citas_medica
            },{
                model:db.historias_clinica
            },{
                model:db.cirugia
            },
            // ,{
            //     model:db.rastreo
            // },{
            {
                model:db.carnet
            }
        ]

        })
        if(Pet.length !== 0){
            return res.status(200).json({
                msg:'Perfil de mascota visualizado correctamente',
                PerfilMascota: Pet
            })
        }else{
            return res.status(404).json({
                msg:'No se encontró perfil de mascota.',
                user: Pet
            })
        }
    }catch(error){
        return res.status(500).json({
            msg:'Hubo un error al visualizar los perfiles de las mascotas.',
            error:error
        })
    }
}
module.exports = {ReadAllPetProfile,ReadIdPetProfile}