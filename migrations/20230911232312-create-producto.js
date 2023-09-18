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
      medicamentoId: {
        type: Sequelize.INTEGER,
        references:{
          model:'medicamentos',
          key:'id'
        }
      },
      accesorioId: {
        type: Sequelize.INTEGER,
        references:{
          model:'accesorios',
          key:'id'
        }
      },
      cantidad_total:{
        type: Sequelize.INTEGER
      },
      unidades_disponibles:{
        type: Sequelize.INTEGER
      },
      estado:{
        type: Sequelize.ENUM("Disponible","Agotado"),
        defaultValue:'Disponible'
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