const db = require('../models')
const Cirugia = db.cirugia

const ReadAllSurgery = async(req,res)=>{
    try{
        const FindCirugia = await Cirugia.findAll({
            include:[{
                model:db.mascota
            },{
                model:db.empleado
            }
        ]
        })
        if(FindCirugia.length !== 0){
            return res.status(200).json({
                msg:'Cirugias visualizadas correctamente',
                Cirugia: FindCirugia
            })
        }else{
            return res.status(404).json({
                msg:'No se encontraron cigurias',
            })
        }
    } catch(error){
        
        return res.status(500).json({
            msg:'Hubo un error al visualizar las cirugias.',
            error:error
        })
    }
}
const ReadIdSurgery = async(req,res)=>{
    try{
        const {id} = req.params

        const FindCirugia = await Cirugia.findAll({
            where:{
                id:id
            },
            include:[{
                model:db.mascota
            },{
                model:db.empleado
            }
        ]

        })
        if(FindCirugia.length !== 0){
            return res.status(200).json({
                msg:'Cirugia visualizada correctamente',
                Cirugia: FindCirugia
            })
        }else{
            return res.status(404).json({
                msg:'No se encontró la cirugia'
            })
        }
    }catch(error){
        return res.status(500).json({
            msg:'Hubo un error al visualizar la cirugia',
            error:error
        })
    }
}
module.exports = {ReadAllSurgery,ReadIdSurgery}