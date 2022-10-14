import express from 'express';

import { route as kanalRoutes } from './routes/kanalRoutes.js';
import { route as kontenRoutes } from './routes/kontenRoutes.js';
import { route as subKanalRoutes } from './routes/subKanalRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

// app.use(express.json());
app.use('/api/categories', kanalRoutes);
app.use('/api/subcategories', subKanalRoutes);
app.use('/api/contents', kontenRoutes);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});
