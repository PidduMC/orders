//Model for Item

module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Product', {
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

  Item.associate = function (models) {
    Item.belongsTo(models.Category)
  }

  return Item
}
