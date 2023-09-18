const db = require('../../models')
const TipoAccesorio = db.tipo_accesorio

const CreateTypeAccesory = async(req,res)=>{
    try{
        const {nombre} = req.body
        const newTypeAccessory = await TipoAccesorio.create({
            nombre:nombre
        })
        return res.status(200).json({
            msg:'Tipo de accesorio creado correctamente.',
            TipoAccesorio:newTypeAccessory
        })
    }catch(error){
        return res.status(500).json({
            msg:'Error al crear el tipo de accesorio.',
            error: error
        })
    }
}

module.exports = CreateTypeAccesory