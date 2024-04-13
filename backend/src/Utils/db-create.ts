import db from "./db-connect";

import user from "../Models/user-model";
import status from "../Models/status-model";
import section from "../Models/section-model";
import skill from "../Models/skill-model";
import city from "../Models/city-model";
import institution from "../Models/institution-model";
import block from "../Models/block-model";
import content from "../Models/content-model";
import contentHasSkills from "../Models/contentHasSkills-model";

content.belongsTo(block, {foreignKey: 'block_id'});
block.hasMany(content, {foreignKey: 'block_id'});

content.belongsToMany(skill, {through: contentHasSkills, foreignKey: 'content_id'});
skill.belongsToMany(content, {through: contentHasSkills, foreignKey: 'skill_id'});

city.belongsTo(block, {foreignKey: 'block_id'});
block.hasOne(city, {foreignKey: 'block_id'});

institution.belongsTo(block, {foreignKey: 'block_id'});
block.hasOne(institution, {foreignKey: 'block_id'});

status.belongsTo(block, {foreignKey: 'block_id'});
block.hasOne(status, {foreignKey: 'block_id'});

block.belongsTo(section, {foreignKey: 'section_id'});
section.hasMany(block, {foreignKey: 'section_id'});

user.sync({
    alter: true,
    force: false // to drop tables and recreate them, else false
})
    .then(
        () => {
            console.log('User table created');
        }
    )
    .catch(
        (err) => {
            console.log(err);
        }
    );

db.sync({
    alter: true,
    force: false // to drop tables and recreate them, else false
})
    .then(
        () => {
            console.log('Database synchronized');
        }
    )
    .catch(
        (err) => {
            console.log(err);
        }
    );

