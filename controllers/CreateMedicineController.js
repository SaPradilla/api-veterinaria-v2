const db = require('../models')
const medicamento = db.medicamento

const CreateMedicine = async(req,res) =>{
    try{
        const {tipo_productoId,precio,unidades,volumen} = req.body

        const newProduct = await medicamento.create({
            tipo_productoId:tipo_productoId,
            precio:precio,
            unidades:unidades,
            volumen:volumen
        })
        return res.status(200).json({
            msg:'medicamento creado correctamente.',
            medicamento:newProduct
        })
    }catch(error){
        return res.status(500).json({
            msg:'Error al crear el medicamento.',
            error: error
        })
    }
}
module.exports = CreateMedicine