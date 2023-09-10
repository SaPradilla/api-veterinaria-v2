const db = require('../models')
const Servicio = db.servicio
const CreateService = async(req,res) =>{
    try{
        const {nombre,costo} = req.body

        const newService = await Servicio.create({
            nombre:nombre,
            costo:costo

        })
        return res.status(200).json({
            msg:'Servicio creado correctamente.',
            Servicio:newService
        })
    }catch(error){
        return res.status(500).json({
            msg:'Error al crear el servicio',
            error: error
        })
    }
}
module.exports = CreateService