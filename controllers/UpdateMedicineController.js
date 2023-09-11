const db = require('../models')
const medicamento = db.medicamento

const UpdateMedicine = async(req,res) =>{
    try{
        const {id} = req.params
        const {tipo_medicamento,precio,unidades,volumen} = req.body

        const updateMedicine = await medicamento.update({
            tipo_medicamento:tipo_medicamento,
            precio:precio,
            unidades:unidades,
            volumen:volumen
        },{
            where:{
                id
            }
        })
        if(updateMedicine != 0){
            return res.status(200).json({
                msg:'medicamento editado correctamente.'
            })
        }else{
            return res.status(404).json({
                msg:'Id del medicamento no se encontró, No se pudo editar correctamente.'
            })
        }
        
    }catch(error){
        return res.status(500).json({
            msg:'Error al editar el medicamento.',
            error: error
        })
    }
}
module.exports = UpdateMedicine