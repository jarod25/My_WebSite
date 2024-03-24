import mysql, {Connection} from 'mysql';
import dotenv from 'dotenv';
dotenv.config();

const db: Connection = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    port: process.env.DB_PORT ? parseInt(process.env.DB_PORT) : undefined
});

db.connect((err: Error) => {
    if (err) {
        console.log(err);
    } else {
        console.log(`mysql://${process.env.DB_USER}:${process.env.DB_PWD}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}`)
    }
});

export default db;