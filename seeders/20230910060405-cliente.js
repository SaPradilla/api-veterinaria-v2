'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('clientes', [{

      nombre: "Andrés",
      apellido: "Lopez",
      numero_celular: "31229292",
      direccion: "cra#13 cll 13 #12-49",
      email: "andres@correo",
      updatedAt:new Date(),
      createdAt:new Date() 
    }
  ]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clientes', null, {});
  }
};
