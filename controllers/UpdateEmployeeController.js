const db = require('../models')
const empleado = db.empleado

const UpdateUser = async (req,res) =>{
    try{
        const {id} = req.params
        const {nombre,apellido,numero_celular,email,direccion,fecha_nacimiento,rol,isAdmin,} = req.body
        const updateUser = await empleado.update({
            nombre: nombre,
            apellido: apellido,
            numero_celular: numero_celular,
            direccion: direccion,
            email: email,
            fecha_nacimiento: fecha_nacimiento,
            rol: rol,
            isAdmin: isAdmin,
            
        },{
            where:{
                id
            }
        })
        if(updateUser !=0 ){

            return res.status(201).json({
                msg:'empleado editado satisfactoriamente.',
            })
        }else{
            
            return res.status(404).json({
                msg:'Id del empleado no se encontró, No se pudo editar correctamente.'
            })
        }

    }catch(error){
        return res.status(500).json({
            msg:'Error al editar el empleado',
            error: error
        })
    }
}
module.exports = UpdateUser
