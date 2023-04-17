const router = require('express').Router();

// Endpoint para hacer pruebas
router.get(`/test`, (req, resp, next) => {
    resp.status(200).send({
        message : 'Endopint al eschucha !!'
    });
});

module.exports = router;