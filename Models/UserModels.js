import { Sequelize, DataTypes } from "sequelize";

import db from "../config/Database.js";

const Shipp = db.define("shipp", {
  userID: {
    type: Sequelize.INTEGER,
    autoIncrement: true, 
    primaryKey: true
  },
  ReceiversName: {
    type: Sequelize.STRING
  },
  TrackingNumber: {
    type: Sequelize.STRING
  },
  PhoneNumber: {
    type: Sequelize.STRING
  },
  PackageWeight: {
    type: Sequelize.FLOAT
  },
  ServiceOption: {
    type: Sequelize.STRING
  }
}, {
  tableName: 'shipp',
  timestamps: false 
}); 

export default Shipp;

(async () => {
  await db.sync();
})();
