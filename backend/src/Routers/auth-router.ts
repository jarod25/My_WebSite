import { Router } from 'express';
import {register, login, protectedRoute} from '../Controllers/auth-controller';
import authenticateToken from "../Utils/auth-middleware";

const authRouter = Router();

authRouter.post('/register', register);
/**
 * @swagger
 * /api/auth/register:
 *   post:
 *      description: Register a user
 *      tags:
 *          - Auth
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          user_username:
 *                              type: string
 *                          user_email:
 *                              type: string
 *                          user_password:
 *                              type: string
 *      responses:
 *          '201':
 *              description: User created
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

authRouter.post('/login', login);
/**
 * @swagger
 * /api/auth/login:
 *   post:
 *      description: Login a user
 *      tags:
 *          - Auth
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          user_email:
 *                              type: string
 *                          user_password:
 *                              type: string
 *      responses:
 *          '201':
 *              description: User logged in
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

authRouter.get('/admin', authenticateToken, protectedRoute);
/**
 * @swagger
 * /api/auth/admin:
 *   get:
 *      description: Get admin page
 *      tags:
 *          - Auth
 *      security:
 *       - bearerAuth: []
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

export default authRouter;