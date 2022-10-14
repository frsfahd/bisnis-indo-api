import { pool } from '../database/db-config.js';

// Get all subKanal
const getAllSubKanal = (req, res) => {
    try {
        pool.query('SELECT * FROM sub_categories')
            .then((results) =>
                res.status(200).send({ status: 'OK', data: results.rows })
            )
            .catch((e) => console.error(e.stack));
    } catch (error) {
        res.status(error?.status || 500).send({
            status: 'FAILED',
            data: { error: error?.message || error },
        });
    }
};

export { getAllSubKanal };
