import {Router} from 'express';
import {getContents, getContentById, getContentByBlockId, createContent, updateContent, deleteContent} from '../Controllers/content-controller';
import authenticateToken from '../Utils/auth-middleware';

const contentRouter = Router();

contentRouter.get('/', getContents);
/**
 * @swagger
 * /api/contents:
 *   get:
 *      description: Get all contents
 *      tags:
 *          - Contents
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

contentRouter.get('/block/:id', getContentByBlockId);

contentRouter.get('/:id', getContentById);

contentRouter.post('/', authenticateToken, createContent);
/**
 * @swagger
 * /api/contents:
 *   post:
 *      description: Create a content
 *      tags:
 *          - Contents
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

contentRouter.put('/:id', authenticateToken, updateContent);
/**
 * @swagger
 * /api/contents/{id}:
 *   put:
 *      description: Update a content
 *      tags:
 *          - Contents
 *      parameters:
 *          - name: id
 *            in: path
 *            description: ID of the content
 *            required: true
 *            schema:
 *              type: integer
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

contentRouter.delete('/:id', authenticateToken, deleteContent);
/**
 * @swagger
 * /api/contents/{id}:
 *   delete:
 *      description: Delete a content
 *      tags:
 *          - Contents
 *      parameters:
 *          - name: id
 *            in: path
 *            description: ID of the content
 *            required: true
 *            schema:
 *              type: integer
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

export default contentRouter;
