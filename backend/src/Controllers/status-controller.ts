import {default as statusService} from "../Services/status-service";
import {Request, Response} from "express";

export const getStatuses = async (req: Request, res: Response): Promise<void> => {
    try {
        let statuses = await statusService.getStatuses();
        res.status(200).json(statuses);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const getStatusById = async (req: Request, res: Response): Promise<void> => {
    try {
        let status = await statusService.getStatusById(parseInt(req.params.id));
        res.status(200).json(status);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const createStatus = async (req: Request, res: Response): Promise<void> => {
    try {
        let status = await statusService.createStatus(req.body);
        res.status(201).json(status);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const updateStatus = async (req: Request, res: Response): Promise<void> => {
    try {
        let status = await statusService.updateStatus(parseInt(req.params.id), req.body);
        res.status(202).json(status);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const deleteStatus = async (req: Request, res: Response): Promise<void> => {
    try {
        await statusService.deleteStatus(parseInt(req.params.id));
        res.status(200).json('Status deleted');
    } catch (e) {
        res.status(500).json(e);
    }
}

export const getStatusByBlockId = async (req: Request, res: Response): Promise<void> => {
    try {
        let status = await statusService.getStatusByBlockId(parseInt(req.params.id));
        res.status(200).json(status);
    } catch (e) {
        res.status(500).json(e);
    }
}