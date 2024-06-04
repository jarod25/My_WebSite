import section from "../Models/section-model";

export default class SectionService {
    static async getSections(): Promise<any> {
        return await section.findAll();
    }

    static async getSectionById(id: number): Promise<any> {
        return await section.findByPk(id);
    }

    static async createSection(sectionData: any): Promise<any> {
        return await section.create(sectionData);
    }

    static async updateSection(id: number, sectionData: any): Promise<any> {
        let updatedSection: any = {
            section_name: sectionData.section_name,
        };
        return await section.update(updatedSection, {where: {section_id: id}});
    }

    static async deleteSection(id: number): Promise<number> {
        return await section.destroy({
            where: {
                section_id: id
            }
        });
    }
}