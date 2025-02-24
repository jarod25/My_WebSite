import db from "./db-connect";

import user from "../Models/user-model";
import period from "../Models/period-model";
import section from "../Models/section-model";
import skill from "../Models/skill-model";
import city from "../Models/city-model";
import institution from "../Models/institution-model";
import block from "../Models/block-model";
import content from "../Models/content-model";
import token from "../Models/token-model";

content.belongsTo(block, {foreignKey: 'block_id'});
block.hasMany(content, {foreignKey: 'block_id'});

skill.belongsToMany(block, {through: 'block_has_skills', foreignKey: 'skill_id'});

city.belongsToMany(block, {through: 'block_city', foreignKey: 'city_id'});

institution.belongsToMany(block, {through: 'block_institution', foreignKey: 'institution_id'});

period.belongsToMany(block, {through: 'block_period', foreignKey: 'period_id'});

block.belongsTo(section, {foreignKey: 'section_id'});
section.hasMany(block, {foreignKey: 'section_id'});

token.belongsTo(user, {foreignKey: 'user_id'});
user.hasOne(token, {foreignKey: 'user_id'});

db.sync({
    alter: true, // true to alter tables on reload, else false
    force: true // true to drop tables and recreate them, else false
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
