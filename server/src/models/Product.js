//Model for Product

module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define('Product', {
    _id: {
      type: DataTypes.UUID,
      unique: true,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING
    },
    description: {
      type: DataTypes.STRING
    }
  })

  Product.associate = function (models) {
    Product.belongsTo(models.Category)
  }

  return Product
}
