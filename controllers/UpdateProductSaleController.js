const db = require('../models')
const Ventamedicamento = db.venta_medicamento

const UpdateSalesProduct = async(req,res) =>{
    try{
        const {id} = req.params
        const {clienteId,medicamentoId,dirrecion,valor_total} = req.body

        const updateSaleProduct = await Ventamedicamento.update({
            clienteId:clienteId,
            medicamentoId:medicamentoId,
            dirrecion:dirrecion,
            valor_total:valor_total
        },{
            where:{
                id
            }
        })
        if(updateSaleProduct != 0){
            return res.status(200).json({
                msg:'Venta de medicamento editada correctamente.'
            })
        }else{
            return res.status(404).json({
                msg:'Id de la venta de medicamento no se encontró, No se pudo editar correctamente.'
            })
        }
    }catch(error){
        return res.status(500).json({
            msg:'Error al editar la Venta de medicamento',
            error: error
        })
    }
}
module.exports = UpdateSalesProduct