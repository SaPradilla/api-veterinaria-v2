'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mascota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1:M
      mascota.belongsTo(models.cliente,{
        foreignKey:'clienteId'
      })
      // M:1
      mascota.hasMany(models.citas_medica,{
        foreignKey:'mascotaId'
      })
      // 1:1
      mascota.hasOne(models.historias_clinica,{
        foreignKey:'mascotaId'
      })
      // M:1
      mascota.hasMany(models.cirugia,{
        foreignKey:'mascotaId'
      })
      // // 1:1
      // mascota.hasOne(models.rastreo,{
      //   foreignKey:'mascotaId'
      // })
      // 1-1
      mascota.hasOne(models.carnet,{
        foreignKey:'mascotaId'
      })
    }
  }
  mascota.init({
    nombre: DataTypes.STRING,
    numero_contacto: DataTypes.STRING,
    tipo_mascota: DataTypes.ENUM('Perro','Gato','Hámster','Ave','Pez','Reptil','Invertebrado','Conejo'),
    edad: DataTypes.STRING,
    raza: DataTypes.STRING,
    genero: DataTypes.ENUM('Macho','Hembra'),
    tamaño: DataTypes.STRING,
    peso: DataTypes.STRING,
    tratamiento: DataTypes.STRING,
    formula_medica: DataTypes.STRING,
    diagnostico: DataTypes.STRING,
    vacunas: DataTypes.STRING,
    clienteId:DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'mascota',
  });
  return mascota;
};