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
      medicamentos: {
        type: Sequelize.STRING
      },
      nombre: {
        type: Sequelize.STRING
      },
      numero_contacto: {
        type: Sequelize.STRING
      },
      edad: {
        type: Sequelize.STRING
      },
      tipo_mascota: {
        type: Sequelize.ENUM('Perro','Gato','Hámster','Ave','Pez','Reptil','Invertebrado','Conejo')
      },
      raza: {
        type: Sequelize.STRING
      },
      genero: {
        type: Sequelize.ENUM('Macho','Hembra')
      },
      tamaño: {
        type: Sequelize.STRING
      },
      patologias: {
        type: Sequelize.STRING
      },
      peso: {
        type: Sequelize.STRING
      },
      tratamiento: {
        type: Sequelize.STRING
      },
      formula_medica: {
        type: Sequelize.STRING
      },
      diagnostico: {
        type: Sequelize.STRING
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