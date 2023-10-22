const db = require('../../models')
const TipoMedicina = db.tipo_medicina

const CreateTypeMedicine = async(req,res)=>{
    try{
        const {nombre} = req.body
        const newTypeMedicine = await TipoMedicina.create({
            nombre:nombre
        })
        return res.status(200).json({
            msg:'Tipo de medicina creado correctamente.',
            TipoMedicina:newTypeMedicine
        })
    }catch(error){
        return res.status(500).json({
            msg:'Error al crear el tipo de medicina.',
            error: error
        })
    }
}

module.exports = CreateTypeMedicine