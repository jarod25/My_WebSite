import skill from "../Models/skill-model";
import blockHasSkills from "../Models/blockHasSkills-model";

export default class SkillService {
    static async getSkills(): Promise<any> {
        return await skill.findAll();
    }

    static async getSkillById(id: number): Promise<any> {
        return await skill.findByPk(id);
    }

    static async createSkill(skillData: any): Promise<any> {
        return await skill.create(skillData);
    }

    static async updateSkill(id: number, skillData: any): Promise<any> {
        let updatedSkill: any = {
            skill_name: skillData.skill_name,
        };
        return await skill.update(updatedSkill, {where: {skill_id: id}});
    }

    static async deleteSkill(id: number): Promise<number> {
        return await skill.destroy({
            where: {
                skill_id: id
            }
        });
    }

    static async getSkillByBlockId(id: number): Promise<any> {
        return await blockHasSkills.findAll({where: {block_id: id}});
    }
}