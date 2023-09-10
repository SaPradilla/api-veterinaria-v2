'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class perfil_mascota extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1:M
      perfil_mascota.belongsTo(models.cliente,{
        foreignKey:'clienteId'
      })
      // M:1
      perfil_mascota.hasMany(models.citas_medica,{
        foreignKey:'perfil_mascotaId'
      })
      // 1:1
      perfil_mascota.hasOne(models.historias_clinica,{
        foreignKey:'perfil_mascotaId'
      })
      // M:1
      perfil_mascota.hasMany(models.cirugia,{
        foreignKey:'perfil_mascotaId'
      })
      // // 1:1
      // perfil_mascota.hasOne(models.rastreo,{
      //   foreignKey:'perfil_mascotaId'
      // })
      // 1-1
      perfil_mascota.hasOne(models.carnet,{
        foreignKey:'perfil_mascotaId'
      })
    }
  }
  perfil_mascota.init({
    medicamentos: DataTypes.STRING,
    nombre: DataTypes.STRING,
    numero_contacto: DataTypes.STRING,
    tipo_mascota: DataTypes.ENUM('Perro','Gato','Hámster','Ave','Pez','Reptil','Invertebrado','Conejo'),
    edad: DataTypes.STRING,
    raza: DataTypes.STRING,
    genero: DataTypes.ENUM('Macho','Hembra'),
    tamaño: DataTypes.STRING,
    patologias: DataTypes.STRING,
    peso: DataTypes.STRING,
    tratamiento: DataTypes.STRING,
    formula_medica: DataTypes.STRING,
    diagnostico: DataTypes.STRING,
    vacunas: DataTypes.STRING,
    clienteId:DataTypes.INTEGER,
    isActive: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'perfil_mascota',
  });
  return perfil_mascota;
};