import express from 'express';
import { query, validationResult } from 'express-validator/check';
import cpfValidator from '../util/cpf-validator';
import cpfController from '../controllers/cpf';

const router = express.Router();

router.get('/', query('cpf').custom((value) => {
  const isCpfValid = cpfValidator(value);

  if (!isCpfValid) {
    throw new Error('O CPF informado é inválido.');
  }

  return true;
}), async (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).send({
      message: errors.mapped().cpf.msg,
    });
  } else {
    const { cpf } = req.query;
    const cpfByValue = await cpfController.getCpf(cpf);

    res.status(200).send({
      cpf: cpfByValue,
    });
  }
});

module.exports = router;
