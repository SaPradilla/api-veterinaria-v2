const db = require('../models')
const CitaMedica = db.citas_medica
const CreateMedicalAppointment = async(req,res) =>{
    try{
        const {clienteId,tipo_cita,perfil_mascotaId} = req.body

        const newMedicalAppointment = await CitaMedica.create({
            clienteId:clienteId,
            tipo_cita:tipo_cita,
            perfil_mascotaId:perfil_mascotaId

        })
        return res.status(200).json({
            msg:'Cita Médica creada correctamente.',
            CitaMedica:newMedicalAppointment
        })
    }catch(error){
        return res.status(500).json({
            msg:'Error al crear la cita médica',
            error: error
        })
    }
}
module.exports = CreateMedicalAppointment