import db from "../Utils/db-connect";
import { DataTypes } from 'sequelize';

const block = db.define('block', {
    block_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    block_position: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
});

export default block;