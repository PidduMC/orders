//Model for Order

module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    _id: {
      type: DataTypes.UUID,
      unique: true,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    customer_id: {
      type: DataTypes.UUID
    },
    item_id: {
      type: DataTypes.UUID
    },
    quantity: {
      type: DataTypes.INTEGER
    },
    date: {
      type: DataTypes.DATEONLY
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
  }

  return Order
}
