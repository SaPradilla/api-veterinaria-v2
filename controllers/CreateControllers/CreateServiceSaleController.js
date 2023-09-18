const db = require('../../models')
const VentaServicio = db.venta_servicio

const CreateServiceSale = async(req,res) =>{
    try{
        const {clienteId,servicioId,valor_total} = req.body

        const newServiceSale = await VentaServicio.create({
            clienteId:clienteId,
            servicioId:servicioId,
            valor_total:valor_total
        })
        return res.status(200).json({
            msg:'Venta de servicio creada correctamente.',
            VentaServicio:newServiceSale
        })
    }catch(error){
        return res.status(500).json({
            msg:'Error al crear la venta de servicio',
            error: error
        })
    }
}
module.exports = CreateServiceSale