const db = require('../models')
const Cirugia = db.cirugia
const Usuario = db.usuario
const CreateSurgery = async(req,res) =>{
    try{
        const {procedimiento,perfil_mascotaId,medicoId} = req.body
    
        const findMedical = await Usuario.findByPk(medicoId)

        if(findMedical.rol === 'Médico'){
            const newSurgery = await Cirugia.create({
                procedimiento:procedimiento,
                perfil_mascotaId:perfil_mascotaId,
                medicoId:medicoId
    
            })
            return res.status(200).json({
                msg:'Cirugia creado correctamente.',
                Cirugia:newSurgery
            })
        }else{
            return res.status(401).json({
                msg:'El usuario no es médico, una cirigua debe tener al menos un médico.'
            })
        }
    }catch(error){
        return res.status(500).json({
            msg:'Error al crear la cirugia',
            error: error
        })
    }
}
module.exports = CreateSurgery