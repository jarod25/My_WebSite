import db from "../Utils/db-connect";
import { DataTypes } from 'sequelize';

const content = db.define('content', {
    content_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    content_name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content_content: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content_type: {
        type: DataTypes.STRING,
        allowNull: false
    },
    content_date: {
        type: DataTypes.DATE,
        allowNull: false
    },
});

export default content;