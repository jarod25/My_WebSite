import content from "../Models/content-model";

export default class ContentService {
    static async getContents(): Promise<any> {
        return await content.findAll();
    }

    static async getContentById(id: number): Promise<any> {
        return await content.findByPk(id);
    }

    static async createContent(contentData: any): Promise<any> {
        return await content.create(contentData);
    }

    static async updateContent(id: number, contentData: any): Promise<any> {
        let updatedContent: any = {
            content_name: contentData.content_name,
            content_content: contentData.content_content,
            content_type: contentData.content_type,
            content_date: contentData.content_date,
        };
        return await content.update(updatedContent, {where: {content_id: id}});
    }

    static async deleteContent(id: number): Promise<number> {
        return await content.destroy({
            where: {
                content_id: id
            }
        });
    }

    static async getContentByBlockId(id: number): Promise<any> {
        return await content.findAll({where: {block_id: id}});
    }
}