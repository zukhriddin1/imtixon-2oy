// import { Sequelize } from "sequelize";

// // const db = new Sequelize("countries", "postgres", "1234zzzz", {
// //   port: 5432,
// //   user: "postgres",
// //   password: "1234zzzz",
// //   host: "localhost",
// //   database: "countries",
// //   dialect: "postgres",
// // });

// const db = new Sequelize(
//   "postgres://countery_7_user:Fj66j2k5hXwzH0fO5S0aOINm6Knf1gkt@dpg-cilb5o15rnuvtgon2fb0-a.oregon-postgres.render.com/countery_7"
// );

// try {
//   await db.authenticate();
//   console.log("db connected");
// } catch (error) {
//   console.error("db con error:", error);
// }

// export default db;

import { Sequelize } from "sequelize";

const db = new Sequelize(
  "postgres://countery_7_user:Fj66j2k5hXwzH0fO5S0aOINm6Knf1gkt@dpg-cilb5o15rnuvtgon2fb0-a.oregon-postgres.render.com/countery_7",
  { dialectOptions: { ssl: true } }
);

try {
  await db.authenticate();
  console.log("db connected");
} catch (error) {
  console.error("db con error:", error);
}

export default db;
