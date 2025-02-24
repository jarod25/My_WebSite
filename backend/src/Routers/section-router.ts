import {Router} from 'express';
import {getSections, getSectionById, createSection, updateSection, deleteSection} from '../Controllers/section-controller';
import authenticateToken from '../Utils/auth-middleware';

const sectionRouter = Router();

sectionRouter.get('/', getSections);
/**
 * @swagger
 * /api/sections:
 *   get:
 *      description: Get all sections
 *      tags:
 *          - Sections
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

sectionRouter.get('/:id', getSectionById);
/**
 * @swagger
 * /api/sections/{id}:
 *   get:
 *      description: Get a section by ID
 *      tags:
 *          - Sections
 *      parameters:
 *          - name: id
 *            in: path
 *            description: ID of the section
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

sectionRouter.post('/', authenticateToken, createSection);
/**
 * @swagger
 * /api/sections:
 *   post:
 *      description: Create a section
 *      tags:
 *          - Sections
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

sectionRouter.put('/:id', authenticateToken, updateSection);
/**
 * @swagger
 * /api/sections/{id}:
 *   put:
 *      description: Update a section
 *      tags:
 *          - Sections
 *      parameters:
 *          - name: id
 *            in: path
 *            description: ID of the section
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

sectionRouter.delete('/:id', authenticateToken, deleteSection);
/**
 * @swagger
 * /api/sections/{id}:
 *   delete:
 *      description: Delete a section
 *      tags:
 *          - Sections
 *      parameters:
 *          - name: id
 *            in: path
 *            description: ID of the section
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

export default sectionRouter;