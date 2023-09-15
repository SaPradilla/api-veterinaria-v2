const db = require('../models')
const Diagnosis = db.diagnostico

const CreateDiagnosis = async(req,res) =>{
    try{
        const {tratamiento,diagnostico,empleadoId} = req.body
        const newDiagnosis = await Diagnosis.create({
            tratamiento:tratamiento,
            diagnostico:diagnostico,
            empleadoId:empleadoId
        })
        return res.status(200).json({
            msg:'Diagnostico creado correctamente.',
            Cliente:newDiagnosis
        })
    }catch(error){
        return res.status(500).json({
            msg:'Error al crear el diagnostico',
            error: error
        })
    }
}
module.exports = CreateDiagnosis