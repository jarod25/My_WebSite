import {default as blockService} from '../Services/block-service';
import {Request, Response} from "express";

export const getBlocks = async (req: Request, res: Response): Promise<void> => {
    try {
        let blocks = await blockService.getBlocks();
        res.status(200).json(blocks);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const getBlockById = async (req: Request, res: Response): Promise<void> => {
    try {
        let block = await blockService.getBlockById(parseInt(req.params.id));
        res.status(200).json(block);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const createBlock = async (req: Request, res: Response): Promise<void> => {
    try {
        let block = await blockService.createBlock(req.body);
        res.status(201).json(block);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const updateBlock = async (req: Request, res: Response): Promise<void> => {
    try {
        let block = await blockService.updateBlock(parseInt(req.params.id), req.body);
        res.status(202).json(block);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const deleteBlock = async (req: Request, res: Response): Promise<void> => {
    try {
        await blockService.deleteBlock(parseInt(req.params.id));
        res.status(200).json('Block deleted');
    } catch (e) {
        res.status(500).json(e);
    }
}

export const getBlockBySectionId = async (req: Request, res: Response): Promise<void> => {
    try {
        let block = await blockService.getBlockBySectionId(parseInt(req.params.id));
        res.status(200).json(block);
    } catch (e) {
        res.status(500).json(e);
    }
}