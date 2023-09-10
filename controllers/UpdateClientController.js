const db = require('../models')
const Cliente = db.cliente

const UpdateClient = async(req,res) =>{
    try{
        const {id} = req.params
        const {nombre,apellido,numero_celular,email,direccion} = req.body
        const updateClient = await Cliente.update({
            nombre:nombre,
            apellido:apellido,
            numero_celular:numero_celular,
            email:email,
            direccion:direccion
        },{
            where:{
                id
            }
        })
        if(updateClient != 0){
            return res.status(200).json({
                msg:'Cliente editado correctamente.'
            })
        }else{
            return res.status(404).json({
                msg:'Id del cliente no se encontró, No se pudo editar correctamente.'
            })
        }
    }catch(error){
        return res.status(500).json({
            msg:'Error al editar el cliente',
            error: error
        })
    }
}
module.exports = UpdateClient