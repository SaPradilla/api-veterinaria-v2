'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class tipo_medicina extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    // 1:M
    tipo_medicina.hasMany(models.medicamento,{
      foreignKey:'tipo_medicinaId'
    })
        
    }
  }
  tipo_medicina.init({
    nombre: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'tipo_medicina',
  });
  return tipo_medicina;
};