import {Router} from 'express';
import {getPeriods, getPeriodById, getPeriodByBlockId,createPeriod, updatePeriod, deletePeriod} from '../Controllers/period-controller';
import authenticateToken from '../Utils/auth-middleware';

const periodRouter = Router();

periodRouter.get('/', getPeriods);
/**
 * @swagger
 * /api/periods:
 *   get:
 *      description: Get all periods
 *      tags:
 *          - Periods
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

periodRouter.get('/block/:id', getPeriodByBlockId);
/**
 * @swagger
 * /api/periods/block/{id}:
 *   get:
 *      description: Get all periods by block ID
 *      tags:
 *          - Periods
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

periodRouter.get('/:id', getPeriodById);
/**
 * @swagger
 * /api/periods/{id}:
 *   get:
 *      description: Get a period by ID
 *      tags:
 *          - Periods
 *      parameters:
 *          - name: id
 *            in: path
 *            description: ID of the period
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

periodRouter.post('/', authenticateToken, createPeriod);
/**
 * @swagger
 * /api/periods:
 *   post:
 *      description: Create a period
 *      tags:
 *          - Periods
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

periodRouter.put('/:id', authenticateToken, updatePeriod);
/**
 * @swagger
 * /api/periods/{id}:
 *   put:
 *      description: Update a period
 *      tags:
 *          - Periods
 *      parameters:
 *          - name: id
 *            in: path
 *            description: ID of the period
 *            required: true
 *            schema:
 *              type: integer
 *      responses:
 */

periodRouter.delete('/:id', authenticateToken, deletePeriod);
/**
 * @swagger
 * /api/periods/{id}:
 *   delete:
 *      description: Delete a period
 *      tags:
 *          - Periods
 *      parameters:
 *          - name: id
 *            in: path
 *            description: ID of the period
 *            required: true
 *            schema:
 *              type: integer
 *      responses:
 */


export default periodRouter;