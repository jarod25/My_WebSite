import city from "../Models/city-model";

export default class CityService {
    static async getCities(): Promise<any> {
        return await city.findAll();
    }

    static async getCityById(id: number): Promise<any> {
        return await city.findByPk(id)
    }

    static async createCity(cityData: any): Promise<any> {
        return await city.create(cityData);
    }

    static async updateCity(id: number, cityData: any): Promise<any> {
        let updatedCity: any = {
            city_name: cityData.city_name,
        };
        return await city.update(updatedCity, {where: {city_id: id}});
    }

    static async deleteCity(id: number): Promise<number> {
        return await city.destroy({
            where: {
                city_id: id
            }
        });
    }

    static async getCityByBlockId(id: number): Promise<any> {
        return await city.findAll({where: {block_id: id}});
    }
}