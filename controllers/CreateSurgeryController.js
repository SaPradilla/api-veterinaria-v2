const db = require('../models')
const Cirugia = db.cirugia
const empleado = db.empleado
const CreateSurgery = async(req,res) =>{
    try{
        const {procedimiento,mascotaId,medicoId} = req.body
    
        const findMedical = await empleado.findByPk(medicoId)

        if(findMedical.rol === 'Médico'){
            const newSurgery = await Cirugia.create({
                procedimiento:procedimiento,
                mascotaId:mascotaId,
                medicoId:medicoId
    
            })
            return res.status(200).json({
                msg:'Cirugia creado correctamente.',
                Cirugia:newSurgery
            })
        }else{
            return res.status(401).json({
                msg:'El empleado no es médico, una cirigua debe tener al menos un médico.'
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