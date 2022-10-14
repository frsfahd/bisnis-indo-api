// import * as kontenService from '../services/kontenService.js';
import { pool } from '../database/db-config.js';

const getAllKonten = (req, res) => {
    const { length, likes, recent, category } = req.query;

    try {
        if (length && !category) {
            //
            // Get n contents
            //
            pool.query(
                `SELECT contents.*, sub_categories.name_subcategory, categories.name_category 
                FROM contents 
                INNER JOIN sub_categories 
                ON contents.subcategory = sub_categories.id_subcategory
                INNER JOIN categories
                ON categories.id_category = sub_categories.category LIMIT $1`,
                [length]
            )
                .then((results) =>
                    res.status(200).send({ status: 'OK', data: results.rows })
                )
                .catch((e) => console.error(e.stack));
        } else if (likes) {
            //
            // Get n favourite content(s)
            //
            pool.query(
                `SELECT contents.*, sub_categories.name_subcategory, categories.name_category 
                FROM contents 
                INNER JOIN sub_categories 
                ON contents.subcategory = sub_categories.id_subcategory
                INNER JOIN categories
                ON categories.id_category = sub_categories.category
                ORDER BY likes DESC
                LIMIT $1`,
                [likes]
            )
                .then((results) =>
                    res.status(200).send({ status: 'OK', data: results.rows })
                )
                .catch((e) => console.error(e.stack));
        } else if (recent) {
            //
            // Get n recent content(s)
            //
            pool.query(
                `SELECT contents.*, sub_categories.name_subcategory, categories.name_category 
                FROM contents 
                INNER JOIN sub_categories 
                ON contents.subcategory = sub_categories.id_subcategory
                INNER JOIN categories
                ON categories.id_category = sub_categories.category
                ORDER BY created_at DESC
                LIMIT $1`,
                [recent]
            )
                .then((results) =>
                    res.status(200).send({ status: 'OK', data: results.rows })
                )
                .catch((e) => console.error(e.stack));
        } else if (category && length) {
            //
            // Get n content(s) by category
            //
            pool.query(
                `(SELECT contents.*, sub_categories.name_subcategory, categories.name_category 
                FROM categories 
                INNER JOIN sub_categories 
                ON categories.id_category = sub_categories.category
                INNER JOIN contents
                ON sub_categories.id_subcategory = contents.subcategory
                WHERE categories.name_category = $1)
                ORDER BY created_at DESC
                LIMIT $2`,
                [category, length]
            )
                .then((results) =>
                    res.status(200).send({ status: 'OK', data: results.rows })
                )
                .catch((e) => console.error(e.stack));
        } else {
            //
            // Get all contents
            //
            pool.query(
                `SELECT contents.*, sub_categories.name_subcategory, categories.name_category 
                FROM contents 
                INNER JOIN sub_categories 
                ON contents.subcategory = sub_categories.id_subcategory
                INNER JOIN categories
                ON categories.id_category = sub_categories.category`
            )
                .then((results) =>
                    res.status(200).send({ status: 'OK', data: results.rows })
                )
                .catch((e) => console.error(e.stack));
        }
    } catch (error) {
        res.status(error?.status || 500).send({
            status: 'FAILED',
            data: { error: error?.message || error },
        });
    }
};

// const getFavouriteKonten = (req, res) => {
//     try {
//         pool.query(
//             `SELECT contents.*, sub_categories.name_subcategory, categories.name_category
//             FROM contents
//             INNER JOIN sub_categories
//             ON contents.subcategory = sub_categories.id_subcategory
//             INNER JOIN categories
//             ON categories.id_category = sub_categories.category
//             ORDER BY likes DESC`
//         )
//             .then((results) =>
//                 res.status(200).send({ status: 'OK', data: results.rows })
//             )
//             .catch((e) => console.error(e.stack));
//     } catch (error) {
//         res.status(error?.status || 500).send({
//             status: 'FAILED',
//             data: { error: error?.message || error },
//         });
//     }
// };

export { getAllKonten };
