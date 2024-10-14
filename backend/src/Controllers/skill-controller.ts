import {default as skillService} from "../Services/skill-service";
import {Request, Response} from "express";

export const getSkills = async (req: Request, res: Response): Promise<void> => {
    try {
        let skills = await skillService.getSkills();
        res.status(200).json(skills);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const getSkillById = async (req: Request, res: Response): Promise<void> => {
    try {
        let skill = await skillService.getSkillById(parseInt(req.params.id));
        res.status(200).json(skill);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const createSkill = async (req: Request, res: Response): Promise<void> => {
    try {
        let skill = await skillService.createSkill(req.body);
        res.status(201).json(skill);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const updateSkill = async (req: Request, res: Response): Promise<void> => {
    try {
        let skill = await skillService.updateSkill(parseInt(req.params.id), req.body);
        res.status(202).json(skill);
    } catch (e) {
        res.status(500).json(e);
    }
}

export const deleteSkill = async (req: Request, res: Response): Promise<void> => {
    try {
        await skillService.deleteSkill(parseInt(req.params.id));
        res.status(200).json('Skill deleted');
    } catch (e) {
        res.status(500).json(e);
    }
}

export const getSkillByBlockId = async (req: Request, res: Response): Promise<void> => {
    try {
        let skill = await skillService.getSkillByBlockId(parseInt(req.params.id));
        res.status(200).json(skill);
    } catch (e) {
        res.status(500).json(e);
    }
}