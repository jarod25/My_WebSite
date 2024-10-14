import user from "../../src/Models/user-model";
import {Request} from 'express';

export interface RequestCustom extends Request
{
    user?: user;
}
