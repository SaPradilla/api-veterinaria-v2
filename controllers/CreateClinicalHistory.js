const db = require('../models')
const ClinicalHistory = db.historias_clinica

const CreateClinicalHistory = async(req,res) =>{
    try{

        const {mascotaId,antecedentes_medicos,lesiones,patologias_vigentes,patologias_superadas,estado_nutricional,historial_comportamiento} = req.body

        const newClinicalHistory = await ClinicalHistory.create({
            mascotaId:mascotaId,
            antecedentes_medicos:antecedentes_medicos,
            lesiones:lesiones,
            patologias_vigentes:patologias_vigentes,
            patologias_superadas:patologias_superadas,
            estado_nutricional:estado_nutricional,
            historial_comportamiento:historial_comportamiento,
        })
        return res.status(200).json({
            msg:'Historia clinica creado correctamente.',
            HistoriaClinica:newClinicalHistory
        })
    }catch(error){
        return res.status(500).json({
            msg:'Error al crear la historia clinica',
            error: error
        })
    }
}
module.exports = CreateClinicalHistory