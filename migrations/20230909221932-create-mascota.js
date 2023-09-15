'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('mascotas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING
      },
      tipo_mascota: {
        type: Sequelize.ENUM('Perro','Gato','Hámster','Ave','Pez','Reptil','Invertebrado','Conejo')
      },
      edad: {
        type: Sequelize.STRING
      },
      raza: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.ENUM('Macho','Hembra')
      },
      diagnosticoId: {
        type: Sequelize.INTEGER,
        references:{
          model:'diagnosticos',
          key:'id'
        },
        onUpdate: 'CASCADE',
        onDelete: 'CASCADE'
      },
      vacunas: {
        type: Sequelize.STRING
      },
      isActive:{
        type:Sequelize.BOOLEAN,
        defaultValue: true
      },
      clienteId: {
        type: Sequelize.INTEGER,
        references:{
          model:'clientes',
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
    await queryInterface.dropTable('mascotas');
  }
};