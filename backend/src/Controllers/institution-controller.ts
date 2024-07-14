import {default as institutionService} from '../Services/institution-service';
import {Request, Response} from "express";

export const getInstitutions = async (req: Request, res: Response): Promise<void> => {
    try {
        let institutions = await institutionService.getInstitutions();
        res.status(200).json(institutions);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const getInstitutionById = async (req: Request, res: Response): Promise<void> => {
    try {
        let institution = await institutionService.getInstitutionById(parseInt(req.params.id));
        res.status(200).json(institution);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const createInstitution = async (req: Request, res: Response): Promise<void> => {
    try {
        let institution = await institutionService.createInstitution(req.body);
        res.status(201).json(institution);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const updateInstitution = async (req: Request, res: Response): Promise<void> => {
    try {
        let institution = await institutionService.updateInstitution(parseInt(req.params.id), req.body);
        res.status(202).json(institution);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const deleteInstitution = async (req: Request, res: Response): Promise<void> => {
    try {
        await institutionService.deleteInstitution(parseInt(req.params.id));
        res.status(200).json('Institution deleted');
    } catch (e) {
        res.status(500).json(e);
    }
}

export const getInstitutionByBlockId = async (req: Request, res: Response): Promise<void> => {
    try {
        let institutions = await institutionService.getInstitutionByBlockId(parseInt(req.params.id));
        res.status(200).json(institutions);
    } catch (e) {
        res.status(500).json(e);
    }
}