const express = require('express')
const router = express.Router()
const Routes = [
    //Create
    {path:'/register/employee', controller: require('../../controllers/Employee/CreateEmployeeController')},
    {path:'/register/pet', controller: require('../../controllers/Pet/CreatePetController')},
    {path:'/register/service', controller: require('../../controllers/Services/CreateServicesController')},
    {path:'/register/client', controller: require('../../controllers/Client/CreateClientController')},
    {path:'/register/medical-appointment', controller: require('../../controllers/MedicalAppointment/CreateMedicalAppointment')},
    {path:'/register/surgery', controller: require('../../controllers/Surgery/CreateSurgeryController')},
    {path:'/register/clinical-history', controller: require('../../controllers/ClinicalHistory/CreateClinicalHistory')},
    {path:'/register/product/medicine', controller: require('../../controllers/Medicine/CreateMedicineController')},
    {path:'/register/sales/product', controller: require('../../controllers/Sales/CreateProductSaleController')},
    {path:'/register/sales/service', controller: require('../../controllers/Sales/CreateServiceSaleController')},
    {path:'/register/pqr', controller: require('../../controllers/Pqr/CreatePQRController')},
    {path:'/register/diagnostico', controller: require('../../controllers/Diagnosis/CreateDiagnosis')},
    {path:'/register/product/accessory', controller: require('../../controllers/Product/Create').CreateAccessory},
    {path:'/register/type-medicine', controller: require('../../controllers/Medicine/CreateTypeMedicineController')},
    {path:'/register/type-accessory', controller: require('../../controllers/Product/CreateTypeAccessory')},
    // Read
    {path:'/list/employee/:id', controller: require('../../controllers/Employee/ReadIdEmployeeController').ReadIdEmployee},
    {path:'/list/medical/:id', controller: require('../../controllers/Employee/ReadIdEmployeeController').ReadIdMedical},
    {path:'/list/auxiliary/:id', controller: require('../../controllers/Employee/ReadIdEmployeeController').ReadIdAuxiliaries},
    {path:'/list/receptionist/:id', controller: require('../../controllers/Employee/ReadIdEmployeeController').ReadIdReceptionists},
    {path:'/list/pet/:id', controller: require('../../controllers/Pet/ReadPetController').ReadIdPetProfile},
    {path:'/list/client/:id', controller: require('../../controllers/Client/ReadClienteController').ReadIdClient},
    {path:'/list/medical-appointment/:id', controller: require('../../controllers/MedicalAppointment/ReadMedicalAppointment').ReadIdMedicalAppointment},
    {path:'/list/surgery/:id', controller: require('../../controllers/Surgery/ReadSurgeryController').ReadIdSurgery},
    {path:'/list/sales/product/:id', controller: require('../../controllers/Sales/ReadSalesController').ReadIdProductSale},
    {path:'/list/sales/service/:id', controller: require('../../controllers/Sales/ReadSalesController').ReadIdServiceSale},
    {path:'/list/product/:id', controller: require('../../controllers/Medicine/ReadMedicineController').ReadIdProduct},
    {path:'/list/service/:id', controller: require('../../controllers/Services/ReadServicesController').ReadIdService},
    {path:'/list/pqr/:id', controller: require('../../controllers/Pqr/ReadPQRController').ReadIdPQR},
    //Update
    {path:'/edit/client/:id', controller: require('../../controllers/Client/UpdateClientController')},
    {path:'/edit/clinical-history/:id', controller: require('../../controllers/ClinicalHistory/UpdateClinicalHistoryController')},
    {path:'/edit/medical-appointment/:id', controller: require('../../controllers/MedicalAppointment/UpdateMedicalAppointmentController')},
    {path:'/edit/pet/:id', controller: require('../../controllers/Pet/UpdatePetController')},
    {path:'/edit/product/medicine/:id', controller: require('../../controllers/Medicine/UpdateMedicineController')},
    {path:'/edit/sale/product/:id', controller: require('../../controllers/Sales/UpdateProductSaleController')},
    {path:'/edit/sale/service/:id', controller: require('../../controllers/Sales/UpdateServiceSaleController')},
    {path:'/edit/service/:id', controller: require('../../controllers/Services/UpdateServicesController')},
    {path:'/edit/surgery/:id', controller: require('../../controllers/Surgery/UpdateSurgeryController')},
    {path:'/edit/employee/:id', controller: require('../../controllers/Employee/UpdateEmployeeController')},
    {path:'/edit/pqr/:id', controller: require('../../controllers/Pqr/UpdatePQRController')},
    // List
    {path:'/list/employees/all', controller: require('../../controllers/Employee/ReadAllEmployeeController').ReadAllEmployees},
    {path:'/list/medicals/all', controller: require('../../controllers/Employee/ReadAllEmployeeController').ReadAllMedical},
    {path:'/list/auxiliaries/all', controller: require('../../controllers/Employee/ReadAllEmployeeController').ReadAllAuxiliaries},
    {path:'/list/receptionists/all', controller: require('../../controllers/Employee/ReadAllEmployeeController').ReadAllReceptionists},
    {path:'/list/pet/all', controller: require('../../controllers/Pet/ReadPetController').ReadIdPetProfile},
    {path:'/list/client/all', controller: require('../../controllers/Client/ReadClienteController').ReadAllClient},
    {path:'/list/medical-appointment/all', controller: require('../../controllers/MedicalAppointment/ReadMedicalAppointment').ReadAllMedicalAppointment},
    {path:'/list/surgery/all', controller: require('../../controllers/Surgery/ReadSurgeryController').ReadAllSurgery},
    {path:'/list/sales/product/all', controller: require('../../controllers/Sales/ReadSalesController').ReadAllProductSale},
    {path:'/list/sales/service/all', controller: require('../../controllers/Sales/ReadSalesController').ReadAllServiceSale},
    {path:'/list/product/all', controller: require('../../controllers/Medicine/ReadMedicineController').ReadIdProduct},
    {path:'/list/service/all', controller: require('../../controllers/Services/ReadServicesController').ReadIdService},
    {path:'/list/pqr/all', controller: require('../../controllers/Pqr/ReadPQRController').ReadAllPQR},
]

//En rutador
Routes.forEach((route) =>{
    router.use(route.path, route.controller)
})
module.exports = router