'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('cirugia', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      procedimiento: {
        type: Sequelize.STRING
      },
      mascotaId: {
        type: Sequelize.INTEGER,
        references:{
          model:'mascotas',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      empleadoId:{
        type:Sequelize.INTEGER,
        references:{
          model:'empleados',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      costo:{
        type: Sequelize.INTEGER
      },
      cita_medicaId:{
        type:Sequelize.INTEGER,
        references:{
          model:'citas_medicas',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
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
    await queryInterface.dropTable('cirugia');
  }
};