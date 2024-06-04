import express from "express";
import {getCities, getCityById, createCity, updateCity, deleteCity} from "../Controllers/city-controller";

const cityRouter = express.Router();

cityRouter.get('/', getCities);
/**
 * @swagger
 * /api/city:
 *  get:
 *      description: Get all cities
 *      tags:
 *          - Cities
 *      responses:
 *          '200':
 *              description: A successful response
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

cityRouter.get('/:id', getCityById);
/**
 * @swagger
 * /api/city/{id}:
 *   get:
 *      description: Get a city by id
 *      tags:
 *          - Cities
 *      parameters:
 *          - name: id
 *            in: path
 *            description: ID of the city
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

cityRouter.post('/', createCity);
/**
 * @swagger
 * /api/city:
 *   post:
 *      description: Create a city
 *      tags:
 *          - Cities
 *      requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                      properties:
 *                          city_name:
 *                              type: string
 *      responses:
 *          '201':
 *              description: City created
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

cityRouter.put('/:id', updateCity);
/**
 * @swagger
 * /api/city/{id}:
 *   put:
 *      description: Update a city
 *      tags:
 *          - Cities
 *      parameters:
 *          - name: id
 *            in: path
 *            description: ID of the city
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
 *                          city_name:
 *                              type: string
 *      responses:
 *          '202':
 *              description: City updated
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

cityRouter.delete('/:id', deleteCity);
/**
 * @swagger
 * /api/city/{id}:
 *   delete:
 *      description: Delete a city
 *      tags:
 *          - Cities
 *      parameters:
 *          - name: id
 *            in: path
 *            description: ID of the city
 *            required: true
 *            schema:
 *              type: integer
 *      responses:
 *          '200':
 *              description: City deleted
 *          '500':
 *              description: An error occurred
 *          '400':
 *              description: Bad request
 */

export default cityRouter;