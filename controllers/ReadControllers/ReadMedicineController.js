const db = require('../../models')
const medicamento = db.medicamento

const ReadAllMedicine = async(req,res)=>{
    try{
        const FindProduct = await medicamento.findAll({
            include:[{
                model:db.venta_producto
            },{
                model:db.venta_servicio
            }
        ]
        })
        if(FindProduct.length !== 0){
            return res.status(200).json({
                msg:'medicamentos visualizados correctamente',
                medicamentos: FindProduct
            })
        }else{
            return res.status(404).json({
                msg:'No se encontraron medicamentos',
            })
        }
    } catch(error){

        return res.status(500).json({
            msg:'Hubo un error al visualizar los medicamentos.',
            error:error
        })
    }
}
const ReadIdProduct = async(req,res)=>{
    try{
        const {id} = req.params

        const FindProduct = await medicamento.findAll({
            where:{
                id:id
            },
            include:[{
                model:db.venta_producto
            },{
                model:db.venta_servicio
            }
        ]

        })
        if(FindProduct.length !== 0){
            return res.status(200).json({
                msg:'medicamento visualizado correctamente',
                medicamento: FindProduct
            })
        }else{
            return res.status(404).json({
                msg:'No se encontró el medicamento'
            })
        }
    }catch(error){
        return res.status(500).json({
            msg:'Hubo un error al visualizar el medicamento',
            error:error
        })
    }
}
module.exports = {ReadAllMedicine,ReadIdProduct}