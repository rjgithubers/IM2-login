// src/models/auth-model.js
const db = require("../config/db");
const generateUUID = require("../utils/generateUUID");

const createUserTable = async () => {
  const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id VARCHAR(50) NOT NULL PRIMARY KEY,
      name VARCHAR(100) NOT NULL,
      email VARCHAR(100) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL
    )
  `;
  await db.query(sql);
};

const ifEmailExists = async (email) => {
  const normalizedEmail = email.trim().toLowerCase();
  const result = await db.query(`SELECT * FROM users WHERE email = ?`, [
    normalizedEmail,
  ]);
  return result[0];
};

const createUser = async (name, email, password) => {
  const id = generateUUID();
  const normalizedEmail = email.trim().toLowerCase();
  return await db.query(
    `INSERT INTO users (id, name, email, password) VALUES (?,?,?,?)`,
    [id, name, normalizedEmail, password]
  );
};

module.exports = { createUserTable, ifEmailExists, createUser };
