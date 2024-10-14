import {Router} from 'express';
import {getStatuses, getStatusById, getStatusByBlockId,createStatus, updateStatus, deleteStatus} from '../Controllers/status-controller';
import authenticateToken from '../Utils/auth-middleware';

const statusRouter = Router();

statusRouter.get('/', getStatuses);
/**
 * @swagger
 * /api/statuses:
 *   get:
 *      description: Get all statuses
 *      tags:
 *          - Statuses
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

statusRouter.get('/block/:id', getStatusByBlockId);

statusRouter.get('/:id', getStatusById);

statusRouter.post('/', authenticateToken, createStatus);
/**
 * @swagger
 * /api/statuses:
 *   post:
 *      description: Create a status
 *      tags:
 *          - Statuses
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

statusRouter.put('/:id', authenticateToken, updateStatus);
/**
 * @swagger
 * /api/statuses/{id}:
 *   put:
 *      description: Update a status
 *      tags:
 *          - Statuses
 *      parameters:
 *          - name: id
 *            in: path
 *            description: ID of the status
 *            required: true
 *            schema:
 *              type: integer
 *      responses:
 */

statusRouter.delete('/:id', authenticateToken, deleteStatus);

export default statusRouter;