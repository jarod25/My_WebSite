import db from "../Utils/db-connect";
import { DataTypes } from 'sequelize';

const city = db.define('city', {
    city_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    city_name: {
        type: DataTypes.STRING,
        allowNull: false
    }
});

export default city;