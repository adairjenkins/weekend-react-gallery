const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');


// PUT Route
router.put('/like/:id', (req, res) => {
    const id = req.params.id;
    console.log('PUT id:', id);
    
    const queryText = `
        UPDATE "items"
        SET "likes" = "likes" + 1
        WHERE "id" = $1;
    `;
    const values = [id];
    console.log("updated database likes");

    pool.query(queryText, values)
        .then( result => {
            res.sendStatus(200);
        })
        .catch( err => {
            console.log(err);
            res. sendStatus(500);
        })
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    console.log('GET route');

    const queryText = `
        SELECT * FROM "items"
        ORDER BY "artist"
    `;

    pool.query(queryText)
        .then( result => {
            console.log(result.rows);
            res.send(result.rows);
        })
        .catch( err => {
            console.log(err);
            res.sendStatus(500);
        })
}); // END GET Route

module.exports = router;