'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class servicio extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 1-M 
      servicio.hasMany(models.citas_medica,{
        foreignKey:'tipo_cita'
      })
      // 1-M 
      servicio.hasOne(models.venta_servicio,{
        foreignKey:'servicioId'
      })
    }
  }
  servicio.init({
    nombre:DataTypes.STRING,
    costo:DataTypes.INTEGER
    // tipo_servicio: DataTypes.ENUM('Salon de belleza','Consultas','Urgencias','Farmacia','Spa','Vacunación','Desparasitación','Esterilización','Guardería','Funeraria','Cirugías','Certificados','Carné','Microship','Examenes Medicos','Oftalmología','Odontologia'),
  }, {
    sequelize,
    modelName: 'servicio',
  });
  return servicio;
};