//Model for Item Category

module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    _id: {
      type: DataTypes.UUID,
      unique: true,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      unique: true
    },
    description: {
      type: DataTypes.STRING
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  })

  Category.associate = function (models) {
  }

  return Category
}
