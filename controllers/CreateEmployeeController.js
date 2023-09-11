const db = require('../models')
const empleado = db.empleado
const Encrypt = require('../middleware/auth')

const CreateEmployee = async (req,res) =>{
    try{
        const {nombre,apellido,numero_celular,email,direccion,fecha_nacimiento,rol,isAdmin,} = req.body
        const hash_contrasena = await Encrypt.cryptPassword(req.body.contrasena)
        const newEmployee = await empleado.create({
            nombre: nombre,
            apellido: apellido,
            numero_celular: numero_celular,
            direccion: direccion,
            email: email,
            fecha_nacimiento: fecha_nacimiento,
            rol: rol,
            isAdmin: isAdmin,
            contrasena:hash_contrasena
            
        })
        return res.status(201).json({
            msg:`empleado ${rol} creado satisfactoriamente.`,
            empleado: newemployee
        })

    }catch(error){
        return res.status(500).json({
            msg:`Error al crear el empleado ${rol}`,
            error: error
        })
    }
}
module.exports = CreateEmployee
