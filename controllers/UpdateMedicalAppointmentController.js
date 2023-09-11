const db = require('../models')
const CitaMedica = db.citas_medica
const UpdateMedicalAppointment = async(req,res) =>{
    try{
        const {id} = req.params
        const {clienteId,tipo_cita,mascotaId} = req.body
        const updateMedicalAppointment = await CitaMedica.update({
            clienteId:clienteId,
            tipo_cita:tipo_cita,
            mascotaId:mascotaId
        },{
            where:{
                id
            }
        })
        if(updateMedicalAppointment != 0){
            return res.status(200).json({
                msg:'Cita médica editada correctamente.'
            })
        }else{
            return res.status(404).json({
                msg:'Id de la cita médica no se encontró, No se pudo editar correctamente.'
            })
        }
    }catch(error){
        return res.status(500).json({
            msg:'Error al editar la cita médica',
            error: error
        })
    }
}
module.exports = UpdateMedicalAppointment