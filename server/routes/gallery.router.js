const express = require('express');
const router = express.Router();
// const galleryItems = require('../modules/gallery.data');
const pool = require('../modules/pool.js');


// POST Route
router.post('/', (req, res) => {
    console.log('POST:', req.body);

    const queryText = `
        INSERT INTO "items" ("path", "artist", "title", "date")
        VALUES ($1, $2, $3, $4);
    `
    const values = [req.body.path, req.body.artist, req.body.title, req.body.date];

    pool.query(queryText, values)
    .then(result => {
        res.sendStatus(201);
    }).catch(err => {
        res.sendStatus(500);
        console.log(err)
    })
}); // END POST Route

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