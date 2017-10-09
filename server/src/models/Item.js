//Model for Item

module.exports = (sequelize, DataTypes) => {
  const Item = sequelize.define('Item', {
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
    },
    category_id: {
      type: DataTypes.UUID
    }
  })

  Item.associate = function (models) {
  }

  return Item
}
