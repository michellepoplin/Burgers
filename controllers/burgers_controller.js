const express = require('express');

const router = express.Router();

const burger = require('../models/burger.js');

router.get('/', (req, res) => {
    burger.selectAll(data => {
        const handlebarsObj = {
            burgers: data,
        };
        console.log(handlebarsObj);
        res.render('index', handlebarsObj);
    });
});

router.post('/api/burgers', (req, res) => {
    burger.insertOne(req.body.name, result => {
        console.log('Ran POST route to add one burger to \'burgers\' table.');
        console.log(result);
        res.json({ id: result.insertId });
    });
});

router.put('/api/burgers/:id', (req, res) => {
    const burgerId = req.params.id;
    console.log(`ID of burger to be updated is ${burgerId}`);
    burger.updateOne(
        burgerId,
        result => {
            if (result.changedRows === 0) {
                res.status(404).end();
            } else {
                res.status(200).end();
            }
        }
    );
});

module.exports = router;