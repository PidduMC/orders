//Model for Customer

module.exports = (sequelize, DataTypes) => {
  const Customer = sequelize.define('Customer', {
    _id: {
      type: DataTypes.UUID,
      unique: true,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    society_name: {
      type: DataTypes.STRING,
      unique: true
    },
    customer_code: {
      type: DataTypes.STRING,
      unique: true
    },
    iva_cf: {
      type: DataTypes.STRING
    },
    telephone: {
      type: DataTypes.UUID
    },
    mail: {
      type: DataTypes.STRING
    },
    notes: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  })

  Customer.associate = function (models) {
  }

  return Customer
}
