import {NextFunction, Response} from 'express';
import AuthService from '../Services/auth-service';
import {RequestCustom} from "../../types/express";

const authenticateToken = async (req: RequestCustom, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
        return res.status(401).json({ message: 'Token non fourni' });
    }

    try {
        req.user = await AuthService.verifyToken(token);
        next();
    } catch (error) {
        return res.status(401).json({ message: 'Token invalide' });
    }
};

export default authenticateToken;
