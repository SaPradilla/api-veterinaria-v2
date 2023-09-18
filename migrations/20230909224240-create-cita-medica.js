'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('citas_medicas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clienteId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'clientes',
          key: 'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      tipo_cita: {
        type:Sequelize.INTEGER,
        allowNull: false,
        references:{
          model:'servicios',
          key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      mascotaId: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
          key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      fecha_cita:{
        type:Sequelize.DATE
      },
      consultorio:{
        type: Sequelize.STRING
      },
      estado:{
        type:Sequelize.ENUM('Programada', 'En proceso', 'Completada', 'Cancelada', 'Reprogramada'),
        defaultValue:'Programada'
      },
      descripcion:{
        type:Sequelize.STRING
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
    await queryInterface.dropTable('citas_medicas');
  }
};