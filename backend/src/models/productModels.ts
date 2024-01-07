import { DataTypes } from 'sequelize';
import db from '../db/connection';

const Product = db.define('Product', {
      name: {
            type: DataTypes.STRING
      },
      description: {
            type: DataTypes.STRING
      },
      price: {
            type: DataTypes.DOUBLE
      },
      stock: {
            type: DataTypes.NUMBER
      }
}, {
      updatedAt: false,
      createdAt: false
});

export default Product;