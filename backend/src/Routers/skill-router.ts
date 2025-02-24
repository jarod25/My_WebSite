import {Router} from 'express';
import {getSkills, getSkillById, createSkill, updateSkill, deleteSkill} from '../Controllers/skill-controller';
import authenticateToken from '../Utils/auth-middleware';

const skillRouter = Router();

skillRouter.get('/', getSkills);
/**
 * @swagger
 * /api/skills:
 *   get:
 *      description: Get all skills
 *      tags:
 *          - Skills
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

skillRouter.get('/:id', getSkillById);
/**
 * @swagger
 * /api/skills/{id}:
 *   get:
 *      description: Get a skill by ID
 *      tags:
 *          - Skills
 *      parameters:
 *          - name: id
 *            in: path
 *            description: ID of the skill
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

skillRouter.post('/', authenticateToken, createSkill);
/**
 * @swagger
 * /api/skills:
 *   post:
 *      description: Create a skill
 *      tags:
 *          - Skills
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

skillRouter.put('/:id', authenticateToken, updateSkill);
/**
 * @swagger
 * /api/skills/{id}:
 *   put:
 *      description: Update a skill
 *      tags:
 *          - Skills
 *      parameters:
 *          - name: id
 *            in: path
 *            description: ID of the skill
 *            required: true
 *            schema:
 *              type: integer
 *      responses:
 */

skillRouter.delete('/:id', authenticateToken, deleteSkill);
/**
 * @swagger
 * /api/skills/{id}:
 *   delete:
 *      description: Delete a skill
 *      tags:
 *          - Skills
 *      parameters:
 *          - name: id
 *            in: path
 *            description: ID of the skill
 *            required: true
 *            schema:
 *              type: integer
 *      responses:
 */

export default skillRouter;