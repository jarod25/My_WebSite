import db from "../Utils/db-connect";
import { DataTypes } from 'sequelize';

const token = db.define('token', {
    token_token: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    token_user_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    dateCreation: {
        type: DataTypes.DATE, allowNull: false
    },
    dateExpiration: {
        type: DataTypes.DATE, allowNull: false
    },
});

export default token;