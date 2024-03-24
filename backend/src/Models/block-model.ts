import db from "../Utils/db-connect";
import {MysqlError, Query} from "mysql";

const blockModel: Query = db.query(`
    CREATE TABLE IF NOT EXISTS block
    (
        id             INT AUTO_INCREMENT PRIMARY KEY,
        position       INT,
        id_section     INT NOT NULL,
        id_institution INT,
        id_city        INT,
        id_status      INT,
        CONSTRAINT fk_block_section FOREIGN KEY (id_section) REFERENCES section (id),
        CONSTRAINT fk_block_institution FOREIGN KEY (id_institution) REFERENCES institution (id),
        CONSTRAINT fk_block_city FOREIGN KEY (id_city) REFERENCES city (id),
        CONSTRAINT fk_block_status FOREIGN KEY (id_status) REFERENCES status (id)
    );
`, (err: MysqlError): void => {
    if (err) {
        console.error(err);
    }
});

export default blockModel;