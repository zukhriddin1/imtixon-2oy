import { Sequelize } from "sequelize";

const db = new Sequelize("countries", "postgres", "1234zzzz", {
  port: 5432,
  user: "postgres",
  password: "1234zzzz",
  host: "localhost",
  database: "countries",
  dialect: "postgres",
});

try {
  await db.authenticate();
  console.log("db connected");
} catch (error) {
  console.error("db con error:", error);
}

export default db;
