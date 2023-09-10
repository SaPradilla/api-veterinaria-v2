const db = require('../models')
const VentaProducto = db.venta_producto
const VentaServicio = db.venta_servicio


const ReadAllProductSale = async(req,res)=>{
    try{
        const FindSaleProduct = await VentaProducto.findAll({
            include:[{
                model:db.producto
            },{
                model:db.cliente
            }
        ]
        })
        if(FindSaleProduct.length !== 0){
            return res.status(200).json({
                msg:'Ventas de productos visualizadas correctamente',
                VentaProducto: FindSaleProduct
            })
        }else{
            return res.status(404).json({
                msg:'No se encontraron ventas de productos'
            })
        }
    } catch(error){
        
        return res.status(500).json({
            msg:'Hubo un error al visualizar las ventas de productos.',
            error:error
        })
    }
}
const ReadIdProductSale = async(req,res)=>{
    try{
        const {id} = req.params

        const FindSaleProduct = await VentaProducto.findAll({
            where:{
                id:id
            },
            include:[{
                model:db.producto
            },{
                model:db.cliente
            }
        ]

        })
        if(FindSaleProduct.length !== 0){
            return res.status(200).json({
                msg:'Venta de producto visualizada correctamente',
                VentaProducto: FindSaleProduct
            })
        }else{
            return res.status(404).json({
                msg:'No se encontró la venta de producto'
            })
        }
    }catch(error){
        return res.status(500).json({
            msg:'Hubo un error al visualizar la venta de producto',
            error:error
        })
    }
}


const ReadAllServiceSale = async(req,res)=>{
    try{
        const FindSaleService = await VentaServicio.findAll({
            include:[{
                model:db.servicio
            },{
                model:db.cliente
            }
        ]
        })
        if(FindSaleService.length !== 0){
            return res.status(200).json({
                msg:'Ventas de servicios visualizadas correctamente',
                VentaServicio: FindSaleService
            })
        }else{
            return res.status(404).json({
                msg:'No se encontraron ventas de servicios'
            })
        }
    } catch(error){
        return res.status(500).json({
            msg:'Hubo un error al visualizar las ventas de servicios.',
            error:error
        })
    }
}
const ReadIdServiceSale = async(req,res)=>{
    try{
        const {id} = req.params

        const FindSaleService = await VentaServicio.findAll({
            where:{
                id:id
            },
            include:[{
                model:db.servicio
            },{
                model:db.cliente
            }
        ]
        })
        if(FindSaleService.length !== 0){
            return res.status(200).json({
                msg:'Venta de servicio visualizada correctamente',
                VentaServicio: FindSaleService
            })
        }else{
            return res.status(404).json({
                msg:'No se encontró la venta de servicio '
            })
        }
    }catch(error){
        return res.status(500).json({
            msg:'Hubo un error al visualizar la venta de servicio',
            error:error
        })
    }
}
module.exports = {ReadAllProductSale,ReadIdProductSale,ReadAllServiceSale,ReadIdServiceSale}