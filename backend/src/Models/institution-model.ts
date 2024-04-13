import db from "../Utils/db-connect";
import { DataTypes } from 'sequelize';

const institution = db.define('institution', {
    institution_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    institution_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

export default institution;