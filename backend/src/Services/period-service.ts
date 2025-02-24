import period from "../Models/period-model";

export default class PeriodService {
    static async getPeriods(): Promise<any> {
        return await period.findAll();
    }

    static async getPeriodById(id: number): Promise<any> {
        return await period.findByPk(id);
    }

    static async createPeriod(periodData: any): Promise<any> {
        return await period.create(periodData);
    }

    static async updatePeriod(id: number, periodData: any): Promise<any> {
        let updatedPeriod: any = {
            period_name: periodData.period_name,
        };
        return await period.update(updatedPeriod, {where: {period_id: id}});
    }

    static async deletePeriod(id: number): Promise<number> {
        return await period.destroy({
            where: {
                period_id: id
            }
        });
    }

    static async getPeriodByBlockId(id: number): Promise<any> {
        return await period.findAll({where: {block_id: id}});
    }
}