//Model for CustomComponet - map a product to it.

module.exports = (sequelize, DataTypes) => {
  const CustomComponent = sequelize.define('CustomComponent', {
    _id: {
      type: DataTypes.UUID,
      unique: true,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    }
  })
  
  CustomComponent.associate = function (models) {
    CustomComponent.belongsTo(models.Product)
  }

  return CustomComponent
}
