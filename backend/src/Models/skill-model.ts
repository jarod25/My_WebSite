import db from "../Utils/db-connect";
import { DataTypes } from 'sequelize';

const skill = db.define('skill', {
    skill_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    skill_name: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false
    }
});

export default skill;