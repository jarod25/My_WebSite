import db from "../Utils/db-connect";
import {MysqlError, Query} from "mysql";

const institutionModel: Query = db.query(`
    CREATE TABLE IF NOT EXISTS institution (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL UNIQUE
    )
`, (err: MysqlError) => {
        if (err) {
            console.error(err);
        }
    }
);

export default institutionModel;