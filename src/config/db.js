// src/config/db.js
const serverlessMysql = require("serverless-mysql");

const db = serverlessMysql({
  config: {
    host: "localhost",       // phpMyAdmin/MySQL host
    database: "section_a",   // DB name
    user: "root",            // DB username
    password: "",            // DB password
    port: 3306               // MySQL port
  },
});

module.exports = db;
