import status from "../Models/status-model";

export default class StatusService {
    static async getStatuses(): Promise<any> {
        return await status.findAll();
    }

    static async getStatusById(id: number): Promise<any> {
        return await status.findByPk(id);
    }

    static async createStatus(statusData: any): Promise<any> {
        return await status.create(statusData);
    }

    static async updateStatus(id: number, statusData: any): Promise<any> {
        let updatedStatus: any = {
            status_name: statusData.status_name,
        };
        return await status.update(updatedStatus, {where: {status_id: id}});
    }

    static async deleteStatus(id: number): Promise<number> {
        return await status.destroy({
            where: {
                status_id: id
            }
        });
    }
}