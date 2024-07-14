import {default as sectionService} from "../Services/section-service";
import {Request, Response} from "express";

export const getSections = async (req: Request, res: Response): Promise<void> => {
    try {
        let sections = await sectionService.getSections();
        res.status(200).json(sections);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const getSectionById = async (req: Request, res: Response): Promise<void> => {
    try {
        let section = await sectionService.getSectionById(parseInt(req.params.id));
        res.status(200).json(section);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const createSection = async (req: Request, res: Response): Promise<void> => {
    try {
        let section = await sectionService.createSection(req.body);
        res.status(201).json(section);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const updateSection = async (req: Request, res: Response): Promise<void> => {
    try {
        let section = await sectionService.updateSection(parseInt(req.params.id), req.body);
        res.status(202).json(section);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const deleteSection = async (req: Request, res: Response): Promise<void> => {
    try {
        await sectionService.deleteSection(parseInt(req.params.id));
        res.status(200).json('Section deleted');
    } catch (e) {
        res.status(500).json(e);
    }
}