'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('productos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      tipo_producto: {
        type: Sequelize.ENUM('Antibióticos','Antiinflamatorios','Antiparasitario','Nutriente','Juguete','Alimentos','Asesorios','Higiene','Collares')
      },
      precio: {
        type: Sequelize.INTEGER
      },
      unidades: {
        type: Sequelize.INTEGER
      },
      volumen: {
        type: Sequelize.STRING
      },
      isActive: {
        type: Sequelize.BOOLEAN
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('productos');
  }
};