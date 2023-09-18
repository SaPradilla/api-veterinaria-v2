const db = require('../../models')
const Rastreo = db.rastreo

const UpdateTracking = async(req,res) =>{
    try{
        const {id} = req.params
        const {clienteId,mascotaId} = req.body

        const updateTracking = await Rastreo.update({
            clienteId:clienteId,
            mascotaId:mascotaId
        },{
            where:{
                id
            }
        })
        if(updateTracking != 0){
            return res.status(200).json({
                msg:'Rastro editado correctamente.'
            })
        }else{
            return res.status(404).json({
                msg:'Id del rastreo no se encontró, No se pudo editar correctamente.'
            })
        }
 
    }catch(error){
        return res.status(500).json({
            msg:'Error al editar el rastro',
            error: error
        })
    }
}
module.exports = UpdateTracking