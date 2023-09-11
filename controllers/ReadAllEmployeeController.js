const db = require('../models')
const empleado = db.empleado

const ReadAllUser = async(req,res)=>{
    try{
        const findUser = await empleado.findAll()
        if(findUser.length !== 0){
            return res.status(200).json({
                msg:'empleados visualizados correctamente',
                user: findUser
            })
        }else{
            return res.status(404).json({
                msg:'No se encontraron empleados.',
                user: findUser
            })
        }
    } catch(error){
        
        return res.status(500).json({
            msg:'Hubo un error al visualizar los empleados',
            error:error
        })
    }
}
const ReadAllMedical = async(req,res)=>{
    try{
        const findMedico = await empleado.findAll({
            where:{
                rol:'Médico'
            },include:[{
                model:db.cirugia
            }]
        })
        if(findMedico.length !== 0){
            return res.status(200).json({
                msg:'Médicos visualizados correctamente',
                medicos: findMedico
            })
        }else{
            return res.status(404).json({
                msg:'No se encontraron médicos.'
            })
        }
    }
    catch(error){
        return res.status(500).json({
            msg:`Hubo un error al visualizar los médicos`,
            error:error
        })
    }
}
const ReadAllAuxiliaries = async(req,res)=>{
    try{
        const findAxuliar = await empleado.findAll({where:{
            rol:'Auxiliar'
        }})
        if(findAxuliar.length !== 0){
            return res.status(200).json({
                msg:'Auxiliares visualizados correctamente',
                axuliares: findAxuliar
            })
        }else{
            return res.status(404).json({
                msg:'No se encontraron Auxiliares.'
            })
        }
    }
    catch(error){
        return res.status(500).json({
            msg:`Hubo un error al visualizar los Auxiliares`,
            error:error
        })
    }
}
const ReadAllReceptionists = async(req,res)=>{
    try{
        const findRecepcionista = await empleado.findAll({where:{
            rol:'Recepcionista'
        }})
        if(findRecepcionista.length !== 0){
            return res.status(200).json({
                msg:'Recepcionistas visualizados correctamente',
                recepcionistas: findRecepcionista
            })
        }else{
            return res.status(404).json({
                msg:'No se encontraron Recepcionistas.'
            })
        }
    }
    catch(error){
        return res.status(500).json({
            msg:`Hubo un error al visualizar los Recepcionistas`,
            error:error
        })
    }
}
module.exports = {ReadAllUser,ReadAllMedical,ReadAllAuxiliaries,ReadAllReceptionists}
