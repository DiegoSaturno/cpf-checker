import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.send('Consulta is working!');
});

module.exports = router;