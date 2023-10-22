const db = require('../../models')
const Servicio = db.servicio
const UpdateService = async(req,res) =>{
    try{
        const {id} = req.params
        const {nombre,costo} = req.body
        const updateService = await Servicio.update({
            nombre:nombre,
            costo:costo

        },{
            where:{
                id
            }
        })
        if(updateService != 0){

            return res.status(200).json({
                msg:'Servicio editado correctamente.'
            })
        }else{
            return res.status(404).json({
                msg:'Id del servicio no se encontró, No se pudo editar correctamente.'
            })
        }
    }catch(error){
        return res.status(500).json({
            msg:'Error al editar el servicio',
            error: error
        })
    }
}
module.exports = UpdateService