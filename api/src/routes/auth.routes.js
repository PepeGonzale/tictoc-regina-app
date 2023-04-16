const router = require('express').Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');

router.get('/test', (req, resp, next) => {
    console.log("API Auth | Para hacer prueba");

    resp.status(200).send({
        message: 'Test exitosa!',
        path: '/test',
        status: 200,
        auth_data: req.body  
    });

});

module.exports = router;