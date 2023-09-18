'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class mascotas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1:M
      mascotas.belongsTo(models.cliente,{
        foreignKey:'clienteId'
      })
      // M:1
      mascotas.hasMany(models.citas_medica,{
        foreignKey:'mascotaId'
      })
      // // 1:1
      mascotas.hasOne(models.historias_clinica,{
        foreignKey:'mascotaId'
      })
      // M:1
      mascotas.hasMany(models.cirugia,{
        foreignKey:'mascotaId'
      })
      mascotas.hasMany(models.diagnostico,{
        foreignKey:'mascotaId'
      })
    }
  }
  mascotas.init({
    nombre: DataTypes.STRING,
    tipo_mascota: DataTypes.ENUM('Perro','Gato','Hámster','Ave','Pez','Reptil','Invertebrado','Conejo'),
    edad: DataTypes.STRING,
    raza: DataTypes.STRING,
    genero: DataTypes.ENUM('Macho','Hembra'),
    vacunas: DataTypes.STRING,
    clienteId:DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'mascotas',
  });
  return mascotas;
};