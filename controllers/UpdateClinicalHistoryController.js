const db = require('../models')
const ClinicalHistory = db.historias_clinica

const UpdateClinicalHistory = async(req,res) =>{
    try{
        const {id} = req.params
        const {perfil_mascotaId,antecedentes_medicos,lesiones,patologias_vigentes,patologias_superadas,estado_nutricional,historial_comportamiento} = req.body

        const updateClinicalHistory = await ClinicalHistory.update({
            perfil_mascotaId:perfil_mascotaId,
            antecedentes_medicos:antecedentes_medicos,
            lesiones:lesiones,
            patologias_vigentes:patologias_vigentes,
            patologias_superadas:patologias_superadas,
            estado_nutricional:estado_nutricional,
            historial_comportamiento:historial_comportamiento,
        },{
            where:{
                id
            }
        })
        if(updateClinicalHistory != 0){
            return res.status(200).json({
                msg:'Historia clinica editado correctamente.'
            })

        }
        else{
            return res.status(404).json({
                msg:'Id del Historia clinica no se encontró, No se pudo editar correctamente.'
            })
        }
    }catch(error){
        return res.status(500).json({
            msg:'Error al editar la historia clinica',
            error: error
        })
    }
}
module.exports = UpdateClinicalHistory