import db from "../Utils/db-connect";
import {MysqlError, Query} from "mysql";

const skillModel: Query = db.query(`
            CREATE TABLE IF NOT EXISTS skill
            (
                id   INT AUTO_INCREMENT PRIMARY KEY,
                name VARCHAR(255) NOT NULL UNIQUE
            )
    `, (err: MysqlError): void => {
        if (err) {
            console.error(err);
        }
    }
);

export default skillModel;