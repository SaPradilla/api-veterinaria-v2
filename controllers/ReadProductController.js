const db = require('../models')
const Producto = db.producto

const ReadAllProduct = async(req,res)=>{
    try{
        const FindProduct = await Producto.findAll({
            include:[{
                model:db.venta_producto
            },{
                model:db.venta_servicio
            }
        ]
        })
        if(FindProduct.length !== 0){
            return res.status(200).json({
                msg:'Productos visualizados correctamente',
                Productos: FindProduct
            })
        }else{
            return res.status(404).json({
                msg:'No se encontraron Productos',
            })
        }
    } catch(error){
        
        return res.status(500).json({
            msg:'Hubo un error al visualizar los Productos.',
            error:error
        })
    }
}
const ReadIdProduct = async(req,res)=>{
    try{
        const {id} = req.params

        const FindProduct = await Producto.findAll({
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
                msg:'Producto visualizado correctamente',
                Producto: FindProduct
            })
        }else{
            return res.status(404).json({
                msg:'No se encontró el Producto'
            })
        }
    }catch(error){
        return res.status(500).json({
            msg:'Hubo un error al visualizar el Producto',
            error:error
        })
    }
}
module.exports = {ReadAllProduct,ReadIdProduct}