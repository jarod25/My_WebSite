import db from "../Utils/db-connect";
import { DataTypes } from 'sequelize';

const section = db.define('section', {
    section_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    section_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default section;