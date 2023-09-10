'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('perfil_mascota', [{

      medicamentos: "Antibioticos",
      nombre: "Wally",
      tipo_mascota: "Gato",
      edad: "7 años",
      raza: "no sabemos",
      genero: "Macho",
      tamaño: "30cm",
      patologias: "ser bonito",
      peso: "20kg",
      tratamiento: "ninguno",
      formula_medica: "ninguno",
      diagnostico: "tiene ojos azules",
      vacunas: "las de siempre",
      clienteId: 1,
      updatedAt:new Date(),
      createdAt:new Date() 
    }
  ]);

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('perfil_mascota', null, {});
  }
};
