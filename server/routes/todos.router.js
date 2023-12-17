const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res) => {
    let queryText = `
    SELECT * FROM "todos" ORDER BY "isComplete"
    `
    pool.query(queryText)
        .then((result) => {
            res.send(result.rows)
        }).catch((error) => {
            console.log(error);
        })
})

router.post('/', (req, res) => {
    let queryText = `
    INSERT INTO "todos" ("text")
    VALUES
    ($1);
    `
    //console.log(req.body);
    pool.query(queryText, [req.body.text])
        .then((result) => {
            res.sendStatus(201)
        }).catch((error) => {
            console.log(error);
        })
    
})


module.exports = router;
