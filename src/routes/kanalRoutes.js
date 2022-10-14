import { Router } from 'express';
import * as kanalController from '../controllers/kanalController.js';
const route = Router();

// Get all kanal
route.get('/', kanalController.getAllkanal);

// Get one kanal by Id
route.get('/:kanalId', kanalController.getOneKanal);

export { route };
