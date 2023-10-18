const express = require('express');
const router = express.Router();
const authService = require('../services/authService');

//https://www.youtube.com/watch?v=PFJNJQCU_lo
/* GET programming languages. */
router.get('/getmetadata', async function(req, res, next) {
    try {
        res.json(await authService.getMetadata());
    } catch (err) {
        console.error(`Error while getting metadata `, err);
        next(err);
    }
});

router.get('/double', async function(req, res, next) {
    try {
        res.json(await authService.double(req.query.number));
    } catch (err) {
        console.error(`Error while getting status `, err);
        next(err);
    }
});
module.exports = router;
