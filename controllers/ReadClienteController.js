const db = require('../models')
const Cliente = db.cliente

const ReadAllClient = async(req,res)=>{
    try{
        const FindClient = await Cliente.findAll({
            include:[{
                model:db.perfil_mascota
            },{
                model:db.citas_medica
            },{
                model:db.pqr
            },{
                model:db.rastreo
            },{
                model:db.venta_producto
            },{
                model:db.venta_servicio
            }
        ]

        })
        if(FindClient.length !== 0){
            return res.status(200).json({
                msg:'Clientes visualizados correctamente',
                Cliente: FindClient
            })
        }else{
            return res.status(404).json({
                msg:'No se encontraron clientes',
                user: FindClient
            })
        }
    } catch(error){
        
        return res.status(500).json({
            msg:'Hubo un error al visualizar los clientes.',
            error:error
        })
    }
}
const ReadIdClient = async(req,res)=>{
    try{
        const {id} = req.params
        const FindClient = await Cliente.findAll({
            where:{
                id:id
            },
            include:[{
                model:db.perfil_mascota
            },{
                model:db.citas_medica
            },{
                model:db.pqr
            },{
                model:db.rastreo
            },{
                model:db.venta_producto
            },{
                model:db.venta_servicio
            }
        ]

        })
        if(FindClient.length !== 0){
            return res.status(200).json({
                msg:'Cliente visualizado correctamente',
                Cliente: FindClient
            })
        }else{
            return res.status(404).json({
                msg:'No se encontró el cliente',
                user: FindClient
            })
        }
    } catch(error){
        
        return res.status(500).json({
            msg:'Hubo un error al visualiza el cliente.',
            error:error
        })
    }
}
module.exports = {ReadAllClient,ReadIdClient}