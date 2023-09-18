const db = require('../../models')
const Accesorio = db.accesorio
const Producto = db.producto
const CreateAccessory = async(req,res) =>{
    try{
        const {nombre,precio,tipo_accesorioId,descripcion,cantidad_total} = req.body
        const newAccessory = await Accesorio.create({
            nombre:nombre,
            precio:precio,
            tipo_accesorioId:tipo_accesorioId,
            descripcion:descripcion,
        })
        if(newAccessory){
            await Producto.create({
                accesorioId:newAccessory.id,
                cantidad_total:cantidad_total,
                unidades_disponibles:cantidad_total
            })
            return res.status(200).json({
                msg:'Accesorio creado correctamente.',
                Cliente:newAccessory
            })
        }
    }catch(error){
        return res.status(500).json({
            msg:'Error al crear el accesorio',
            error: error
        })
    }
}
module.exports = CreateAccessory