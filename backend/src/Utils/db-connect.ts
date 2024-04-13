import { Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

console.log(`mysql://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
const db: Sequelize = new Sequelize(`mysql://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`,
    {omitNull: true})

export default db;