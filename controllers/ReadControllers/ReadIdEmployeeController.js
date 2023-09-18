const db = require('../../models')
const empleado = db.empleado

const ReadIdEmployee = async(req,res)=>{
    try{
        const {id} = req.params

        const findUser = await empleado.findAll({
            where:{
                id
            }
        })
        if(findUser.length !== 0){
            return res.status(200).json({
                msg:'empleados visualizado correctamente',
                user: findUser
            })
        }else{
            return res.status(404).json({
                msg:'No se encontró el empleado.',
                user: findUser
            })
        }
    } catch(error){
        
        return res.status(500).json({
            msg:'Hubo un error al visualizar el empleado',
            error:error
        })
    }
}
const ReadIdMedical = async(req,res)=>{
    try{
        const {id} = req.params
        const findMedico = await empleado.findAll({
            where:{
                rol:'Médico',
                id: id
            },include:[{
                model:db.cirugia
            }]
        })
        if(findMedico.length !== 0){
            return res.status(200).json({
                msg:'Médico visualizado correctamente',
                medicos: findMedico
            })
        }else{
            return res.status(404).json({
                msg:'No se encontró el médico.'
            })
        }
    }
    catch(error){
        return res.status(500).json({
            msg:`Hubo un error al visualizar el médico`,
            error:error
        })
    }
}
const ReadIdAuxiliaries = async(req,res)=>{
    try{
        const {id} = req.params
        const findAxuliar = await empleado.findAll({
            where:{
                rol:'Auxiliar',
                id:id
            }
        })
        if(findAxuliar.length !== 0){
            return res.status(200).json({
                msg:'Auxiliar visualizado correctamente',
                axuliares: findAxuliar
            })
        }else{
            return res.status(404).json({
                msg:'No se encontró el auxiliar.'
            })
        }
    }
    catch(error){
        return res.status(500).json({
            msg:`Hubo un error al visualizar el Auxilia`,
            error:error
        })
    }
}
const ReadIdReceptionists = async(req,res)=>{
    try{
        const {id} = req.params
        const findRecepcionista = await empleado.findAll({
            where:{
                rol:'Recepcionista',
                id:id
            }
        })
        if(findRecepcionista.length !== 0){
            return res.status(200).json({
                msg:'Recepcionista visualizado correctamente',
                recepcionistas: findRecepcionista
            })
        }else{
            return res.status(404).json({
                msg:'No se encontró Recepcionista.'
            })
        }
    }
    catch(error){
        return res.status(500).json({
            msg:`Hubo un error al visualizar el Recepcionista`,
            error:error
        })
    }
}
module.exports = {ReadIdEmployee,ReadIdMedical,ReadIdAuxiliaries,ReadIdReceptionists}
