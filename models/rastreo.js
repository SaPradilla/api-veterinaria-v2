'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rastreo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1:1
      rastreo.belongsTo(models.cliente,{
        foreignKey:'clienteId'
      })
      // // 1:1
      // rastreo.belongsTo(models.perfil_mascota,{
      //   foreignKey:'perfil_mascotaId'
      // })

    }
  }
  rastreo.init({
    clienteId: DataTypes.INTEGER,
    // Redundante ?
    estado:DataTypes.BOOLEAN,
    isActive:DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'rastreo',
  });
  return rastreo;
};