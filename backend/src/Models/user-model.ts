import db from "../Utils/db-connect";
import {MysqlError, Query} from "mysql";


const userModel: Query = db.query(`
    CREATE TABLE IF NOT EXISTS user (
        email VARCHAR(255) NOT NULL UNIQUE PRIMARY KEY,
        username VARCHAR(255) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL
    )
`, (err: MysqlError) => {
        if (err) {
            console.error(err);
        }
    }
);

export default userModel;