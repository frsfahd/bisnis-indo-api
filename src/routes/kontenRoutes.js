import { Router } from 'express';
import * as kontenController from '../controllers/kontenController.js';
const route = Router();

// Get all konten
route.get('/', kontenController.getAllKonten);

// Get konten by Id
// route.get('/:kontenId');

export { route };
