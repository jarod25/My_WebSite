import {default as periodService} from "../Services/period-service";
import {Request, Response} from "express";

export const getPeriods = async (req: Request, res: Response): Promise<void> => {
    try {
        let statuses = await periodService.getPeriods();
        res.status(200).json(statuses);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const getPeriodById = async (req: Request, res: Response): Promise<void> => {
    try {
        let status = await periodService.getPeriodById(parseInt(req.params.id));
        res.status(200).json(status);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const createPeriod = async (req: Request, res: Response): Promise<void> => {
    try {
        let status = await periodService.createPeriod(req.body);
        res.status(201).json(status);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const updatePeriod = async (req: Request, res: Response): Promise<void> => {
    try {
        let status = await periodService.updatePeriod(parseInt(req.params.id), req.body);
        res.status(202).json(status);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const deletePeriod = async (req: Request, res: Response): Promise<void> => {
    try {
        await periodService.deletePeriod(parseInt(req.params.id));
        res.status(200).json('Period deleted');
    } catch (e) {
        res.status(500).json(e);
    }
}

export const getPeriodByBlockId = async (req: Request, res: Response): Promise<void> => {
    try {
        let status = await periodService.getPeriodByBlockId(parseInt(req.params.id));
        res.status(200).json(status);
    } catch (e) {
        res.status(500).json(e);
    }
}