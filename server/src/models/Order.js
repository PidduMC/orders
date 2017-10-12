//Model for Order

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    _id: {
      type: DataTypes.UUID,
      unique: true,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    quantity: {
      type: DataTypes.INTEGER
    },
    delivery_date: {
      type: DataTypes.DATEONLY
    },
    status:{
      type: DataTypes.ENUM,
      values: ['creato', 'lavorazione', 'pronto', 'spedito']
    },
    delivery_type: {
      type: DataTypes.ENUM,
      values: ['RD','CorriereCliente','Spedizione']
    }
  })

Order.associate = function (models) {
  Order.belongsTo(models.Customer)
  Order.hasMany(models.Item)
  }

  return Order
}
