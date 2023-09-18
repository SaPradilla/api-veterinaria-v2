const db = require('../../models')
const Pqr = db.pqr

const UpdatePqr = async(req,res) =>{
    try{
        const {id} = req.params
        const {pqr_descripcion} = req.body
        const updatePqr = await Pqr.update({
            pqr_descripcion:pqr_descripcion
        },{
            where:{
                id
            }
        })
        if(updatePqr != 0){
            return res.status(200).json({
                msg:'PQR editada correctamente.'
            })
        }else{
            return res.status(404).json({
                msg:'Id de la pqr no se encontró, No se pudo editar correctamente.'
            })
        }
    }catch(error){
        return res.status(500).json({
            msg:'Error al editar la pqr',
            error: error
        })
    }
}
module.exports = UpdatePqr