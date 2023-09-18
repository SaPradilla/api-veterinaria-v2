const db = require('../../models')
const Cirugia = db.cirugia
const empleado = db.empleado
const EmpleadosCirugias = db.empleados_cirugia

const CreateSurgery = async (req, res) => {
    // try {
        const { procedimiento, mascotaId, cita_medicaId, medicoId, auxiliarId, medicoId2 } = req.body

        const findMedical = await empleado.findByPk(medicoId)

        if (findMedical.length !== 0 && findMedical.rol === 'Médico') {

            const newSurgery = await Cirugia.create({
                procedimiento,
                mascotaId,
                cita_medicaId,
            })
            // Arreglo con los ids
            const employeesToCreate = [findMedical.id]
            // Si algunos de estos existen se agregan al array xd
            if (auxiliarId) {
                const findAuxiliary = await empleado.findByPk(auxiliarId)
                if(findAuxiliary.length === 0 || findAuxiliary.rol !== 'Auxiliar'){
                    return res.status(404).json({
                        msg:'Error al encontrar el empleado auxiliar'
                    })
                }
                employeesToCreate.push(findAuxiliary.id)
            }
            if (medicoId2) {
                const findMedical2 = await empleado.findByPk(medicoId2)
                if(findMedical2.length === 0 || findMedical2.rol !== 'Médico' ){
                    return res.status(404).json({
                        msg:'Error al encontrar el empleado médico'
                    })
                }
                employeesToCreate.push(findMedical2.id)
            }
            // Recorre el array y hace lo que esta dentro
            // Asignando los ids a la pivote
            // array de promesas 
            const employeesCirugiasPromises = employeesToCreate.map((employeeId) =>
                EmpleadosCirugias.create({
                    cirugiaId: newSurgery.id,
                    empleadoId: employeeId,
                })
            )
            // Espera a que se ejecute el array de promesas
            await Promise.all(employeesCirugiasPromises);

            return res.status(200).json({
                msg: 'Cirugia creada correctamente.',
                Cirugia: newSurgery,
            })
        } else {
            return res.status(401).json({
                msg: 'El empleado no es médico o auxiliar, una cirugía debe tener al menos un médico o un auxiliar.'
            })
        }
 
    // } catch (error) {
    //     return res.status(500).json({
    //         msg: 'Ocurrió un error al crear la cirugia.',
    //         error: error,
    //     });
    // }
}

module.exports = CreateSurgery;
