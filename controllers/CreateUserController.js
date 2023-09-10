const db = require('../models')
const Usuario = db.usuario
const Encrypt = require('../middleware/auth')

const CreateUser = async (req,res) =>{
    try{
        const {nombre,apellido,numero_celular,email,direccion,fecha_nacimiento,rol,isAdmin,} = req.body
        const hash_contraseña = await Encrypt.cryptPassword(req.body.contraseña)
        const newUser = await Usuario.create({
            nombre: nombre,
            apellido: apellido,
            numero_celular: numero_celular,
            direccion: direccion,
            email: email,
            fecha_nacimiento: fecha_nacimiento,
            rol: rol,
            isAdmin: isAdmin,
            contraseña:hash_contraseña
            
        })
        return res.status(201).json({
            msg:`Usuario ${rol} creado satisfactoriamente.`,
            Usuario: newUser
        })

    }catch(error){
        return res.status(500).json({
            msg:`Error al crear el usuario ${rol}`,
            error: error
        })
    }
}
module.exports = CreateUser
