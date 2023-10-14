import { Sequelize } from "sequelize";

const db = new Sequelize("railway", "root", "BEjPsiwF1zLgUE6PwMN7", {
  host: "containers-us-west-88.railway.app",
  port: "6372",
  dialect: "mysql",
});

db.authenticate()
  .then(() => `Database sudah terhubung`)
  .catch((error) => console.log(error));

export default db;
