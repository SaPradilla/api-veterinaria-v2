const db = require('../models')
const Cirugia = db.cirugia
const UpdateSurgery = async(req,res) =>{
    try{
        const {id} = req.params
        const {procedimiento,perfil_mascotaId,medicoId} = req.body
        const updateSurgery = await Cirugia.update({
            procedimiento:procedimiento,
            perfil_mascotaId:perfil_mascotaId,
            medicoId:medicoId
        },{
            where:{
                id
            }
        })
        if(updateSurgery != 0){
            return res.status(200).json({
                msg:'Cirugia editada correctamente.'
            })
            
        }else{
            console.log(id)
            return res.status(404).json({
                msg:'Id de la cirugia no se encontró, No se pudo editar correctamente.'
            })
        }
    }catch(error){
        return res.status(500).json({
            msg:'Error al editar la cirugia',
            error: error
        })
    }
}
module.exports = UpdateSurgery