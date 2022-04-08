require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: "password",
    database: "litmus-back",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  test: {
    username: "root",
    password: null,
    database: "database_test",
    host: "127.0.0.1",
    dialect: "mysql",
  },
  production: {
    username: process.env.USER_DB,
    password: process.env.PASSWORD_DB,
    database: process.env.DATABASE,
    host: process.env.HOST_DB,
    dialect: "mysql",
  },
};
