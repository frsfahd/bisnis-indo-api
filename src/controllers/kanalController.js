// import * as kanalService from '../services/kanalService.js';
import { pool } from '../database/db-config.js';

// Get all kanal
const getAllkanal = (req, res) => {
    try {
        pool.query('SELECT * FROM categories')
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

// Get a kanal and its subKanal(s)
const getOneKanal = (req, res) => {
    const {
        params: { kanalId },
    } = req;

    // if parameter is missing
    if (!kanalId) {
        res.status(400).send({
            status: 'FAILED',
            data: { error: "Parameter ':kanalId' can not be empty" },
        });
    }

    try {
        pool.query(
            'SELECT categories.name_category ,sub_categories.name_subcategory FROM categories  INNER JOIN sub_categories ON categories.id_category = sub_categories.category  WHERE categories.id_category = $1',
            [kanalId]
        )
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

    // try {
    //     const kanal = kanalService.getOneKanal(kanalId);
    //     // console.log(typeof kanal);
    //     res.send({ status: 'OK', data: kanal });
    // } catch (error) {
    //     res.status(error?.status || 500).send({
    //         status: 'FAILED',
    //         data: { error: error?.message || error },
    //     });
    // }
};

export { getAllkanal, getOneKanal };
