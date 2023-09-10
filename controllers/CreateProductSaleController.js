const db = require('../models')
const VentaProducto = db.venta_producto

const CreateSalesProduct = async(req,res) =>{
    try{
        const {clienteId,productoId,dirrecion,valor_total} = req.body

        const newSaleProduct = await VentaProducto.create({
            clienteId:clienteId,
            productoId:productoId,
            dirrecion:dirrecion,
            valor_total:valor_total
        })
        return res.status(200).json({
            msg:'Venta de producto creada correctamente.',
            VentaProducto:newSaleProduct
        })
    }catch(error){
        return res.status(500).json({
            msg:'Error al crear la Venta de Producto',
            error: error
        })
    }
}
module.exports = CreateSalesProduct