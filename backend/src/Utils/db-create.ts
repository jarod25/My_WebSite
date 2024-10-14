import db from "./db-connect";

import user from "../Models/user-model";
import status from "../Models/status-model";
import section from "../Models/section-model";
import skill from "../Models/skill-model";
import city from "../Models/city-model";
import institution from "../Models/institution-model";
import block from "../Models/block-model";
import content from "../Models/content-model";
import blockHasSkills from "../Models/blockHasSkills-model";
import token from "../Models/token-model";

content.belongsTo(block, {foreignKey: 'block_id'});
block.hasMany(content, {foreignKey: 'block_id'});

block.belongsToMany(skill, {through: blockHasSkills, foreignKey: 'block_id'});
skill.belongsToMany(block, {through: blockHasSkills, foreignKey: 'skill_id'});

city.belongsTo(block, {foreignKey: 'block_id'});
block.hasOne(city, {foreignKey: 'block_id'});

institution.belongsTo(block, {foreignKey: 'block_id'});
block.hasOne(institution, {foreignKey: 'block_id'});

status.belongsTo(block, {foreignKey: 'block_id'});
block.hasOne(status, {foreignKey: 'block_id'});

block.belongsTo(section, {foreignKey: 'section_id'});
section.hasMany(block, {foreignKey: 'section_id'});

token.belongsTo(user, {foreignKey: 'user_id'});
user.hasOne(token, {foreignKey: 'user_id'});

db.sync({
    alter: true, // to alter tables on reload, else false
    force: true // to drop tables and recreate them, else false
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

