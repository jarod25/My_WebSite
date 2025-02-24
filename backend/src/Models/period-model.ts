import db from "../Utils/db-connect";
import { DataTypes } from 'sequelize';

const period = db.define('period', {
    period_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    period_start_year: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
    period_end_year: {
        type: DataTypes.DATEONLY,
        allowNull: false
    },
});

export default period;