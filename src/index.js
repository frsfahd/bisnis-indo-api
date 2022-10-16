import express from 'express';
import * as cors from 'cors';

import { route as kanalRoutes } from './routes/kanalRoutes.js';
import { route as kontenRoutes } from './routes/kontenRoutes.js';
import { route as subKanalRoutes } from './routes/subKanalRoutes.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(
    cors({
        origin: '*',
    })
);
// app.use(express.json());
app.use('/categories', kanalRoutes);
app.use('/subcategories', subKanalRoutes);
app.use('/contents', kontenRoutes);

app.listen(PORT, () => {
    console.log(`API is listening on port ${PORT}`);
});
