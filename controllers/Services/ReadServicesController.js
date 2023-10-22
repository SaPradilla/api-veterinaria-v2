const db = require('../../models')
const Servicio = db.servicio

const ReadAllService = async(req,res)=>{
    try{
        const FindService = await Servicio.findAll({
            include:[{
                model:db.citas_medica
            },{
                model:db.venta_servicio
            }
        ]
        })
        if(FindService.length !== 0){
            return res.status(200).json({
                msg:'Servicios visualizados correctamente',
                Servicios: FindService
            })
        }else{
            return res.status(404).json({
                msg:'No se encontraron servicios',
            })
        }
    } catch(error){
        
        return res.status(500).json({
            msg:'Hubo un error al visualizar los servicios.',
            error:error
        })
    }
}
const ReadIdService  = async(req,res)=>{
    try{
        const {id} = req.params

        const FindService = await Servicio.findAll({
            where:{
                id:id
            },
            include:[{
                model:db.citas_medica
            },{
                model:db.venta_servicio
            }
        ]
        })

        if(FindService.length !== 0){
            return res.status(200).json({
                msg:'Servicio visualizado correctamente',
                Servicio: FindService
            })
        }else{
            return res.status(404).json({
                msg:'No se encontró el Servicio'
            })
        }
    }catch(error){
        return res.status(500).json({
            msg:'Hubo un error al visualizar el Servicio',
            error:error
        })
    }
}
module.exports = {ReadAllService,ReadIdService}