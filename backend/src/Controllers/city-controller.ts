import {default as cityService} from '../Services/city-service';
import {Request, Response} from "express";

export const getCities = async(req: Request, res: Response) => {
    try {
        let cities = await cityService.getCities();
        return res.status(200).json(cities);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const getCityById = async (req: Request, res: Response): Promise<void> => {
    try {
        let city = await cityService.getCityById(parseInt(req.params.id));
        res.status(200).json(city);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const createCity = async (req: Request, res: Response): Promise<void> => {
    try {
        let city = await cityService.createCity(req.body);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const updateCity = async (req: Request, res: Response) => {
    try {
        let city = await cityService.updateCity(parseInt(req.params.id), req.body);
        res.status(200).json(city);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const deleteCity = async (req: Request, res: Response): Promise<void> => {
    try {
        await cityService.deleteCity(parseInt(req.params.id));
        res.status(200).json("City deleted");
    } catch (e) {
        res.status(500).json(e);
    }
}

export const getCityByBlockId = async (req: Request, res: Response): Promise<void> => {
    try {
        let cities = await cityService.getCityByBlockId(parseInt(req.params.id));
        res.status(200).json(cities);
    } catch (e) {
        res.status(500).json(e);
    }
}