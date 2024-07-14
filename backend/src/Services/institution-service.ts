import institution from "../Models/institution-model";

export default class InstitutionService {
    static async getInstitutions(): Promise<any> {
        return await institution.findAll();
    }

    static async getInstitutionById(id: number): Promise<any> {
        return await institution.findByPk(id);
    }

    static async createInstitution(institutionData: any): Promise<any> {
        return await institution.create(institutionData);
    }

    static async updateInstitution(id: number, institutionData: any): Promise<any> {
        let updatedInstitution: any = {
            institution_name: institutionData.institution_name,
        };
        return await institution.update(updatedInstitution, {where: {institution_id: id}});
    }

    static async deleteInstitution(id: number): Promise<number> {
        return await institution.destroy({
            where: {
                institution_id: id
            }
        });
    }

    static async getInstitutionByBlockId(id: number): Promise<any> {
        return await institution.findAll({where: {block_id: id}});
    }
}