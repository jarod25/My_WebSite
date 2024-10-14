import db from "../Utils/db-connect";
import { DataTypes } from 'sequelize';

const token = db.define('token', {
    token_token: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
});

export default token;