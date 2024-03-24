import db from "../Utils/db-connect";
import {MysqlError, Query} from "mysql";

const contentModel: Query = db.query(`
            CREATE TABLE IF NOT EXISTS content
            (
                id       INT AUTO_INCREMENT PRIMARY KEY,
                name     VARCHAR(255) NOT NULL,
                content  TEXT         NOT NULL,
                date     DATE         NOT NULL,
                id_block INT          NOT NULL,
                CONSTRAINT fk_content_block FOREIGN KEY (id_block) REFERENCES block (id)
            )
    `, (err: MysqlError): void => {
        if (err) {
            console.error(err);
        }
    }
);

export default contentModel;