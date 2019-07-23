import express from 'express';
import cpfController from '../controllers/cpf';

const router = express.Router();

router.get('/', async (req, res) => {
  const cpfsOnBlacklist = await cpfController.countCpfsOnBlacklist();

  res.status(200).send({
    uptime: process.uptime(),
    cpfsOnBlacklist,
  });
});

module.exports = router;
