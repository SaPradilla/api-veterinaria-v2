const db = require('../../models')
const VentaServicio = db.venta_servicio

const UpdateServiceSale = async(req,res) =>{
    try{
        const {id} = req.params
        const {clienteId,servicioId,valor_total} = req.body

        const updateServiceSale = await VentaServicio.update({
            clienteId:clienteId,
            servicioId:servicioId,
            valor_total:valor_total
        },
        {
            where:{
                id
            }
        })
        if(updateServiceSale != 0){
            return res.status(200).json({
                msg:'Venta de servicio editado correctamente.'
            })
        }else{
            return res.status(404).json({
                msg:'Id de la venta de servicio no se encontró, No se pudo editar correctamente.'
            })

        }
    }catch(error){
        return res.status(500).json({
            msg:'Error al editar la venta de servicio',
            error: error
        })
    }
}
module.exports = UpdateServiceSale