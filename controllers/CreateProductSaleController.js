const db = require('../models')
const Ventamedicamento = db.venta_producto

const CreateSalesProduct = async(req,res) =>{
    try{
        const {clienteId,medicamentoId,dirrecion,valor_total} = req.body

        const newSaleProduct = await Ventamedicamento.create({
            clienteId:clienteId,
            medicamentoId:medicamentoId,
            dirrecion:dirrecion,
            valor_total:valor_total
        })
        return res.status(200).json({
            msg:'Venta de medicamento creada correctamente.',
            Ventamedicamento:newSaleProduct
        })
    }catch(error){
        return res.status(500).json({
            msg:'Error al crear la Venta de medicamento',
            error: error
        })
    }
}
module.exports = CreateSalesProduct