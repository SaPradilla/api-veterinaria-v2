const db = require('../../models')
const CitaMedica = db.citas_medica
const CreateMedicalAppointment = async(req,res) =>{
    try{
        const {clienteId,tipo_cita,mascotaId,empleadoId,fecha_cita,consultorio,estado,descripcion} = req.body

        const newMedicalAppointment = await CitaMedica.create({
            clienteId:clienteId,
            tipo_cita:tipo_cita,
            mascotaId:mascotaId,
            empleadoId:empleadoId,
            fecha_cita:fecha_cita,
            consultorio:consultorio,
            estado:estado,
            descripcion:descripcion

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