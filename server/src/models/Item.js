//Model for Item

module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
    _id: {
      type: DataTypes.UUID,
      unique: true,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.INTEGER
    },
    metadata: {
      type: DataTypes.TEXT
    }
  })

  Item.associate = function (models) {
    Item.belongsTo(models.Category)
    Item.belongsTo(models.Product)
    Item.belongsTo(models.Order)
  }

  return Item
}
