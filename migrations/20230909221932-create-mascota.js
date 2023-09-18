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
      vacunas: {
        type: Sequelize.STRING
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
      isActive:{
        type:Sequelize.BOOLEAN,
        defaultValue: true
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