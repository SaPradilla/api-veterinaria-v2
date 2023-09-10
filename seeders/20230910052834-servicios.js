'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('servicios', [{

      nombre: "Salon de belleza",
      costo: 230000,
      updatedAt:new Date(),
      createdAt:new Date() 
    },
    {
      nombre: "Consultas",
      costo: 25000,
      updatedAt:new Date(),
      createdAt:new Date() 
    },
    {
      nombre: "Urgencias",
      costo: 20000,
      updatedAt:new Date(),
      createdAt:new Date() 
    },
    {
      nombre: "Spa",
      costo: 150000,
      updatedAt:new Date(),
      createdAt:new Date() 
    },{
      nombre: "Vacunación",
      costo: 8000,
      updatedAt:new Date(),
      createdAt:new Date() 
    },{
      nombre: "Desparasitación",
      costo: 25000,
      updatedAt:new Date(),
      createdAt:new Date() 
    },{
      nombre: "Esterilización",
      costo: 1000,
      updatedAt:new Date(),
      createdAt:new Date() 
    },{
      nombre: "Guardería",
      costo: 25000,
      updatedAt:new Date(),
      createdAt:new Date() 
    },{
      nombre: "Funeraria",
      costo: 32000,
      updatedAt:new Date(),
      createdAt:new Date() 
    },{
      nombre: "Carné",
      costo: 80000,
      updatedAt:new Date(),
      createdAt:new Date() 
    },{
      nombre: "Microship",
      costo: 150000,
      updatedAt:new Date(),
      createdAt:new Date() 
    },{
      nombre: "Examenes Medicos",
      costo: 35000,
      updatedAt:new Date(),
      createdAt:new Date() 
    },{
      nombre: "Oftalmología",
      costo: 15000,
      updatedAt:new Date(),
      createdAt:new Date() 
    },{
      nombre: "Odontologia",
      costo: 12500,
      updatedAt:new Date(),
      createdAt:new Date() 
    }
  ]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('servicios', null, {});
  }
};
