import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../Models/user-model';
import Token from '../Models/token-model';
import {Op} from "sequelize";

const SECRET_KEY = process.env.SECRET || 'secret-key';

export default class AuthService {
    static async register(email: string, username: string, password: string): Promise<any> {
        const hashedPassword = await bcrypt.hash(password, 10);
        return await User.create({user_username: username, user_email: email, user_password: hashedPassword });
    }

    static async login(email: string, password: string): Promise<any> {
        const user = await User.findOne({ where: { user_email: email } });
        if (!user) {
            throw new Error('Email invalide');
        }

        const oneHourAgo = new Date(Date.now() - 60 * 60 * 1000); // currentDate - 1h
        const expiredToken = await Token.findOne({
            where: {
                user_id: user.get('user_id'),
                createdAt: { [Op.lt]: oneHourAgo }
            }
        });
        if (expiredToken) {
            await expiredToken.destroy();
        }

        const userPassword = user.get('user_password') as string;
        const isPasswordValid = await bcrypt.compare(password, userPassword);
        if (!isPasswordValid) {
            throw new Error('Mot de passe invalide');
        }

        const token = jwt.sign({ id: user.get('user_id'), email: user.get('user_email') }, SECRET_KEY, { expiresIn: '1h' });
        await Token.create({ token_token: token, user_id: user.get('user_id') });

        return token;
    }

    static async verifyToken(token: string): Promise<any> {
        try {
            return jwt.verify(token, SECRET_KEY);
        } catch (error: any) {
            throw new Error('Token invalide');
        }
    }
}
