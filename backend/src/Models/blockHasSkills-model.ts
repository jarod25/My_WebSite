import db from "../Utils/db-connect";
import {DataTypes} from 'sequelize';
import skill from "./skill-model";
import block from "./block-model";

const contentHasSkills = db.define('block_has_skills', {
    block_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: block,
            key: 'block_id'
        }
    },
    skill_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        references: {
            model: skill,
            key: 'skill_id'
        }
    }
});

export default contentHasSkills;