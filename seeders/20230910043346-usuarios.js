'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('usuarios', [{

      nombre: "Andrés",
      apellido: "Lopez",
      numero_celular: "312823238",
      direccion: "casa1#17",
      email: "andres@correo",
      fecha_nacimiento: "2001-09-10",
      rol: "Médico",
      contraseña: "andres12345",
      updatedAt:new Date(),
      createdAt:new Date() 
    },
    {
      nombre: "Laura",
      apellido: "Garcia",
      numero_celular: "3182298372",
      direccion: "cll 20 - #39-34",
      email: "laurita@correo",
      fecha_nacimiento: "1985-09-10",
      rol: "Recepcionista",
      contraseña: "laurita1",
      updatedAt:new Date(),
      createdAt:new Date() 
    },
    {
      nombre: "Alexis",
      apellido: "Vazques",
      numero_celular: "312833636",
      direccion: "cll 20 - #39-34",
      email: "alexis123@correo",
      fecha_nacimiento: "1996-09-10",
      rol: "Auxiliar",
      contraseña: "aleva123",
      updatedAt:new Date(),
      createdAt:new Date() 
    }
  ]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('usuarios', null, {});
  }
};
