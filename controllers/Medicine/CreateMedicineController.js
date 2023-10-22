const db = require('../../models')
const medicamento = db.medicamento
const Producto = db.producto

const CreateMedicine = async(req,res) =>{
    try{
        const {tipo_medicinaId,precio,volumen,fecha_venciminento,cantidad_total} = req.body

        const newMedicine = await medicamento.create({
            tipo_medicinaId:tipo_medicinaId,
            precio:precio,
            volumen:volumen,
            fecha_venciminento:fecha_venciminento
        })
        if(newMedicine){
            await Producto.create({
                medicamentoId:newMedicine.id,
                cantidad_total:cantidad_total,
                unidades_disponibles:cantidad_total

            })
            return res.status(200).json({
                msg:'medicamento creado correctamente.',
                medicamento:newMedicine
            })
        }
    }catch(error){
        return res.status(500).json({
            msg:'Error al crear el medicamento.',
            error: error
        })
    }
}
module.exports = CreateMedicine