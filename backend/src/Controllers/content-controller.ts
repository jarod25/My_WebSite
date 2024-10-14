import {default as contentService} from '../Services/content-service';
import {Request, Response} from "express";

export const getContents = async (req: Request, res: Response): Promise<void> => {
    try {
        let contents = await contentService.getContents();
        res.status(200).json(contents);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const getContentById = async (req: Request, res: Response): Promise<void> => {
    try {
        let content = await contentService.getContentById(parseInt(req.params.id));
        res.status(200).json(content);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const createContent = async (req: Request, res: Response): Promise<void> => {
    try {
        let content = await contentService.createContent(req.body);
        res.status(201).json(content);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const updateContent = async (req: Request, res: Response): Promise<void> => {
    try {
        let content = await contentService.updateContent(parseInt(req.params.id), req.body);
        res.status(202).json(content);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const deleteContent = async (req: Request, res: Response): Promise<void> => {
    try {
        await contentService.deleteContent(parseInt(req.params.id));
        res.status(200).json('Content deleted');
    } catch (e) {
        res.status(500).json(e);
    }
}

export const getContentByBlockId = async (req: Request, res: Response): Promise<void> => {
    try {
        let contents = await contentService.getContentByBlockId(parseInt(req.params.id));
        res.status(200).json(contents);
    } catch (e) {
        res.status(500).json(e);
    }
}