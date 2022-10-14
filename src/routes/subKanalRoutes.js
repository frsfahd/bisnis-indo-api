import { Router } from 'express';
import * as subKanalController from '../controllers/subKanalController.js';
const route = Router();

// Get all kanal
route.get('/', subKanalController.getAllSubKanal);

export { route };
