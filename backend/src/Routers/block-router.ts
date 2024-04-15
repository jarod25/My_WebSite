import express from "express";
import {getBlocks, getBlockById, createBlock, updateBlock, deleteBlock} from "../Controllers/block-controller";

const blockRouter = express.Router();

blockRouter.get('/', getBlocks);
/**
 * @swagger
 * /api/blocks:
 *   get:
 *      description: Get all blocks
 *      tags:
 *          - Blocks
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

blockRouter.get('/:id', getBlockById);
/**
 * @swagger
 * /api/blocks/{id}:
 *   get:
 *      description: Get a block by id
 *      tags:
 *          - Blocks
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

blockRouter.post('/', createBlock);
/**
 * @swagger
 * /api/blocks:
 *   post:
 *      description: Create a block
 *      tags:
 *          - Blocks
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          block_position:
 *                              type: integer
 *                          section_id:
 *                              type: integer
 *      responses:
 *          '201':
 *              description: Block created
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

blockRouter.put('/:id', updateBlock);
/**
 * @swagger
 * /api/blocks/{id}:
 *   put:
 *      description: Update a block
 *      tags:
 *          - Blocks
 *      parameters:
 *          - name: id
 *            in: path
 *            description: ID of the block
 *            required: true
 *            schema:
 *              type: integer
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          block_position:
 *                              type: integer
 *                          section_id:
 *                              type: integer
 *      responses:
 *          '202':
 *              description: Block updated
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

blockRouter.delete('/:id', deleteBlock);
/**
 * @swagger
 * /api/blocks/{id}:
 *   delete:
 *      description: Delete a block
 *      tags:
 *          - Blocks
 *      parameters:
 *          - name: id
 *            in: path
 *            description: ID of the block
 *            required: true
 *            schema:
 *              type: integer
 *      responses:
 *          '200':
 *              description: Block deleted
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

export default blockRouter;