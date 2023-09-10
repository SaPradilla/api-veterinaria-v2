const db = require('../models')
const Rastreo = db.rastreo

const CreateTracking = async(req,res) =>{
    try{

        const {clienteId,perfil_mascotaId} = req.body

        const newTracking = await Rastreo.create({
            clienteId:clienteId,
            perfil_mascotaId:perfil_mascotaId
        })
        return res.status(200).json({
            msg:'Rastro creado correctamente.',
            Rastreo:newTracking
        })
    }catch(error){
        return res.status(500).json({
            msg:'Error al crear el rastro',
            error: error
        })
    }
}
module.exports = CreateTracking