import db from "../Utils/db-connect";
import { DataTypes } from 'sequelize';

const status = db.define('status', {
    status_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    status_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default status;