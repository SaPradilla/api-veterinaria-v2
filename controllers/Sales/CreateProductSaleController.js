const db = require('../../models')
const VentaProducto = db.venta_producto
const Medicamento = db.medicamento
const Accesorio = db.accesorio
const Producto = db.producto

const CreateSalesProduct = async(req,res) =>{
    try{
        const {clienteId,medicamentoId,accesorioId,valor_total,cantidad} = req.body
        const productsIds = []

        if(medicamentoId){
            const findMedicine = await Medicamento.findAll({
                where:{
                    id:medicamentoId
                },
                include:[{
                    model:db.producto
                }]
            })
            console.log(findMedicine)
            // productsIds.push(findMedicine)
        }
        // if(accesorioId){
        // }
        const idAcc = parseInt(accesorioId)
        const findAccessory = await Accesorio.findAll({
            where:{
                id:idAcc
            },
            include:[{
                model:db.producto
            }]
        })
        // Terminar AQUI ///////////////////////////////
        
        // const findAccessory = await Accesorio.findByPk(id)
        const findAccessoryObject = findAccessory[0]
        console.log(findAccessoryObject.dataValues.id)
        // productsIds.push(findAccessory)
        
        // const newSaleProduct = await VentaProducto.create({
        //     clienteId:clienteId,
        //     medicamentoId:medicamentoId,
        //     accesorioId:accesorioId,
        //     valor_total:valor_total,
        //     cantidad:cantidad
        // })
        

        return res.status(200).json({
            msg:'Venta de medicamento creada correctamente.',
            // VentaProducto:newSaleProduct
        })
    }catch(error){
        return res.status(500).json({
            msg:'Error al crear la Venta de medicamento',
            error: error
        })
    }
}
module.exports = CreateSalesProduct