const db = require('../../models')
const Pqr = db.pqr

const CreatePqr = async(req,res) =>{
    try{
        const {clienteId,pqr_descripcion} = req.body

        const newPqr = await Pqr.create({
            clienteId:clienteId,
            pqr_descripcion:pqr_descripcion
  
        })
        return res.status(200).json({
            msg:'PQR registrada correctamente.',
            Pqr:newPqr
        })
    }catch(error){
        return res.status(500).json({
            msg:'Error al crear crear la pqr',
            error: error
        })
    }
}
module.exports = CreatePqr