const db = require('../models')
const Pqr = db.pqr

const ReadAllPQR = async(req,res)=>{
    try{
        const FindPqr = await Pqr.findAll({
            include:[{
                model:db.cliente
            }
        ]
        })
        if(FindPqr.length !== 0){
            return res.status(200).json({
                msg:'Pqrs visualizadas correctamente',
                Pqrs: FindPqr
            })
        }else{
            return res.status(404).json({
                msg:'No se encontraron Pqrs',
            })
        }
    } catch(error){
        return res.status(500).json({
            msg:'Hubo un error al visualizar las pqrs.',
            error:error
        })
    }
}
const ReadIdPQR  = async(req,res)=>{
    try{
        const {id} = req.params

        const FindPqr = await Pqr.findAll({
            where:{
                id:id
            },
            include:[{
                model:db.cliente
            }
        ]
        })

        if(FindPqr.length !== 0){
            return res.status(200).json({
                msg:'Pqr visualizada correctamente',
                Pqr: FindPqr
            })
        }else{
            return res.status(404).json({
                msg:'No se encontró la pqr'
            })
        }
    }catch(error){
        return res.status(500).json({
            msg:'Hubo un error al visualizar la pqr',
            error:error
        })
    }
}
module.exports = {ReadAllPQR,ReadIdPQR}