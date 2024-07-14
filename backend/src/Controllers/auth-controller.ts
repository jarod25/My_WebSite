import {Request, Response} from 'express';
import {default as AuthService} from '../Services/auth-service';
import {RequestCustom} from "../../types/express";

export const register = async (req: Request, res: Response): Promise<void> => {
    try {
        const email = req.body.user_email;
        const username = req.body.user_username;
        const password = req.body.user_password;
        const user = await AuthService.register(email, username, password);
        res.status(201).json({message: 'Utilisateur enregistré', user});
    } catch (error: any) {
        res.status(400).json({message: error.message});
    }
}

export const login = async (req: Request, res: Response): Promise<void> => {
    try {
        const email = req.body.user_email;
        const password = req.body.user_password;
        const token = await AuthService.login(email, password);
        res.status(200).json({token});
    } catch (error: any) {
        res.status(401).json({message: error.message});
    }
}

export const protectedRoute = async (req: RequestCustom, res: Response): Promise<any> => {
    try {
        const user = req.user;
        res.status(200).json({ message: `Bonjour ${user.email}` });
    } catch (error: any) {
        res.status(401).json({ message: error.message });
    }
}
