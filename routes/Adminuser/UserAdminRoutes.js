const express = require('express')
const router = express.Router()
const Routes = [
    //Create
    {path:'/register/employee', controller: require('../../controllers/CreateControllers/CreateEmployeeController')},
    {path:'/register/pet', controller: require('../../controllers/CreateControllers/CreatePetController')},
    {path:'/register/service', controller: require('../../controllers/CreateControllers/CreateServicesController')},
    {path:'/register/client', controller: require('../../controllers/CreateControllers/CreateClientController')},
    {path:'/register/medical-appointment', controller: require('../../controllers/CreateControllers/CreateMedicalAppointment')},
    {path:'/register/surgery', controller: require('../../controllers/CreateControllers/CreateSurgeryController')},
    {path:'/register/clinical-history', controller: require('../../controllers/CreateControllers/CreateClinicalHistory')},
    {path:'/register/product/medicine', controller: require('../../controllers/CreateControllers/CreateMedicineController')},
    {path:'/register/sales/product', controller: require('../../controllers/CreateControllers/CreateProductSaleController')},
    {path:'/register/sales/service', controller: require('../../controllers/CreateControllers/CreateServiceSaleController')},
    {path:'/register/pqr', controller: require('../../controllers/CreateControllers/CreatePQRController')},
    {path:'/register/diagnostico', controller: require('../../controllers/CreateControllers/CreateDiagnosis')},
    {path:'/register/product/accessory', controller: require('../../controllers/CreateControllers/CreateAccessoryController')},
    {path:'/register/type-medicine', controller: require('../../controllers/CreateControllers/CreateTypeMedicineController')},
    {path:'/register/type-accessory', controller: require('../../controllers/CreateControllers/CreateTypeAccessoryController')},
    // Read
    {path:'/list/employee/:id', controller: require('../../controllers/ReadControllers/ReadIdEmployeeController').ReadIdEmployee},
    {path:'/list/medical/:id', controller: require('../../controllers/ReadControllers/ReadIdEmployeeController').ReadIdMedical},
    {path:'/list/auxiliary/:id', controller: require('../../controllers/ReadControllers/ReadIdEmployeeController').ReadIdAuxiliaries},
    {path:'/list/receptionist/:id', controller: require('../../controllers/ReadControllers/ReadIdEmployeeController').ReadIdReceptionists},
    {path:'/list/pet/:id', controller: require('../../controllers/ReadControllers/ReadPetController').ReadIdPetProfile},
    {path:'/list/client/:id', controller: require('../../controllers/ReadControllers/ReadClienteController').ReadIdClient},
    {path:'/list/medical-appointment/:id', controller: require('../../controllers/ReadControllers/ReadMedicalAppointment').ReadIdMedicalAppointment},
    {path:'/list/surgery/:id', controller: require('../../controllers/ReadControllers/ReadSurgeryController').ReadIdSurgery},
    {path:'/list/sales/product/:id', controller: require('../../controllers/ReadControllers/ReadSalesController').ReadIdProductSale},
    {path:'/list/sales/service/:id', controller: require('../../controllers/ReadControllers/ReadSalesController').ReadIdServiceSale},
    {path:'/list/product/:id', controller: require('../../controllers/ReadControllers/ReadMedicineController').ReadIdProduct},
    {path:'/list/service/:id', controller: require('../../controllers/ReadControllers/ReadServicesController').ReadIdService},
    {path:'/list/pqr/:id', controller: require('../../controllers/ReadControllers/ReadPQRController').ReadIdPQR},
    //Update
    {path:'/edit/client/:id', controller: require('../../controllers/UpdateControllers/UpdateClientController')},
    {path:'/edit/clinical-history/:id', controller: require('../../controllers/UpdateControllers/UpdateClinicalHistoryController')},
    {path:'/edit/medical-appointment/:id', controller: require('../../controllers/UpdateControllers/UpdateMedicalAppointmentController')},
    {path:'/edit/pet/:id', controller: require('../../controllers/UpdateControllers/UpdatePetController')},
    {path:'/edit/product/medicine/:id', controller: require('../../controllers/UpdateControllers/UpdateMedicineController')},
    {path:'/edit/sale/product/:id', controller: require('../../controllers/UpdateControllers/UpdateProductSaleController')},
    {path:'/edit/sale/service/:id', controller: require('../../controllers/UpdateControllers/UpdateServiceSaleController')},
    {path:'/edit/service/:id', controller: require('../../controllers/UpdateControllers/UpdateServicesController')},
    {path:'/edit/surgery/:id', controller: require('../../controllers/UpdateControllers/UpdateSurgeryController')},
    {path:'/edit/employee/:id', controller: require('../../controllers/UpdateControllers/UpdateEmployeeController')},
    {path:'/edit/pqr/:id', controller: require('../../controllers/UpdateControllers/UpdatePQRController')},
    // List
    {path:'/list/employees/all', controller: require('../../controllers/ReadControllers/ReadAllEmployeeController').ReadAllEmployees},
    {path:'/list/medicals/all', controller: require('../../controllers/ReadControllers/ReadAllEmployeeController').ReadAllMedical},
    {path:'/list/auxiliaries/all', controller: require('../../controllers/ReadControllers/ReadAllEmployeeController').ReadAllAuxiliaries},
    {path:'/list/receptionists/all', controller: require('../../controllers/ReadControllers/ReadAllEmployeeController').ReadAllReceptionists},
    {path:'/list/pet/all', controller: require('../../controllers/ReadControllers/ReadPetController').ReadIdPetProfile},
    {path:'/list/client/all', controller: require('../../controllers/ReadControllers/ReadClienteController').ReadAllClient},
    {path:'/list/medical-appointment/all', controller: require('../../controllers/ReadControllers/ReadMedicalAppointment').ReadAllMedicalAppointment},
    {path:'/list/surgery/all', controller: require('../../controllers/ReadControllers/ReadSurgeryController').ReadAllSurgery},
    {path:'/list/sales/product/all', controller: require('../../controllers/ReadControllers/ReadSalesController').ReadAllProductSale},
    {path:'/list/sales/service/all', controller: require('../../controllers/ReadControllers/ReadSalesController').ReadAllServiceSale},
    {path:'/list/product/all', controller: require('../../controllers/ReadControllers/ReadMedicineController').ReadIdProduct},
    {path:'/list/service/all', controller: require('../../controllers/ReadControllers/ReadServicesController').ReadIdService},
    {path:'/list/pqr/all', controller: require('../../controllers/ReadControllers/ReadPQRController').ReadAllPQR},
]

//En rutador
Routes.forEach((route) =>{
    router.use(route.path, route.controller)
})
module.exports = router