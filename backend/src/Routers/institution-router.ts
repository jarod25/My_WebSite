import {Router} from 'express';
import {getInstitutions, getInstitutionById, createInstitution, updateInstitution, deleteInstitution, getInstitutionByBlockId} from '../Controllers/institution-controller';
import authenticateToken from '../Utils/auth-middleware';

const institutionRouter = Router();

institutionRouter.get('/', getInstitutions);
/**
 * @swagger
 * /api/institutions:
 *   get:
 *      description: Get all institutions
 *      tags:
 *          - Institutions
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

institutionRouter.get('/block/:id', getInstitutionByBlockId);
/**
 * @swagger
 * /api/institution/block/{id}:
 *   get:
 *      description: Get all institutions by block ID
 *      tags:
 *          - Institutions
 *      parameters:
 *          - name: id
 *            in: path
 *            description: ID of the block
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

institutionRouter.get('/:id', getInstitutionById);
/**
 * @swagger
 * /api/institution/{id}:
 *   get:
 *      description: Get an institution by ID
 *      tags:
 *          - Institutions
 *      parameters:
 *          - name: id
 *            in: path
 *            description: ID of the institution
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

institutionRouter.post('/', authenticateToken, createInstitution);
/**
 * @swagger
 * /api/institutions:
 *   post:
 *      description: Create a institution
 *      tags:
 *          - Institutions
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

institutionRouter.put('/:id', authenticateToken, updateInstitution);
/**
 * @swagger
 * /api/institutions/{id}:
 *   put:
 *      description: Update a institution
 *      tags:
 *          - Institutions
 *      parameters:
 *          - name: id
 *            in: path
 *            description: ID of the institution
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

institutionRouter.delete('/:id', authenticateToken, deleteInstitution);
/**
 * @swagger
 * /api/institutions/{id}:
 *   delete:
 *      description: Delete a institution
 *      tags:
 *          - Institutions
 *      parameters:
 *          - name: id
 *            in: path
 *            description: ID of the institution
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

export default institutionRouter;