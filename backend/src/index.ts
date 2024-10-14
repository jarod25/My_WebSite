import express, {Express, NextFunction, Request, Response} from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import swaggerJsDoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

dotenv.config();
require('./Utils/db-create');

// Routers
import authRouter from "./Routers/auth-router";
import blockRouter from "./Routers/block-router";
import cityRouter from "./Routers/city-router";
import contentRouter from "./Routers/content-router";
import institutionRouter from "./Routers/institution-router";
import sectionRouter from "./Routers/section-router";
import skillRouter from "./Routers/skill-router";
import statusRouter from "./Routers/status-router";

const app: Express = express();
const port: number = process.env.PORT ? parseInt(process.env.PORT) : 5000;

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));

app.use((req: Request, res: Response, next: NextFunction): void => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
    next();
});

const swaggerOptions = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'API Documentation',
            version: '1.0.0',
            description: 'Documentation for the API of the project to manage the content of the website.',
            contact: {
                name: 'Jarod Kohler',
                email: 'kohler.jarod.2004@mail.com'
            },
            servers: [
                { url: 'http://localhost:5000' },
                { url: 'https://localhost:5000' }
            ]
        },
        components: {
            securitySchemes: {
                Bearer: {
                    type: 'apiKey',
                    scheme: "bearer",
                    in: 'header',
                    name: 'Authorization',
                    description: 'Bearer {token}'
                }
            }
        }
    },
    apis: ['index.ts','./src/Routers/*.ts']
};

const swaggerDocs: object = swaggerJsDoc(swaggerOptions);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))
app.use('/api/auth', authRouter);
app.use('/api/blocks', blockRouter);
app.use('/api/cities', cityRouter);
app.use('/api/contents', contentRouter);
app.use('/api/institutions', institutionRouter);
app.use('/api/sections', sectionRouter);
app.use('/api/skills', skillRouter);
app.use('/api/statuses', statusRouter);

app.listen(port, (): void => {
    console.log(`Server start on http://localhost:${port}`);
});
