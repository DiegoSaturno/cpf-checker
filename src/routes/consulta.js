import express from 'express';
import { query, validationResult } from 'express-validator/check';
import cpfValidator from '../util/cpf-validator';

const router = express.Router();

router.get('/', query('cpf').custom((value) => {
  const isCpfValid = cpfValidator(value);

  if (!isCpfValid) {
    throw new Error('O CPF informado é inválido.');
  }

  return true;
}), (req, res) => {
  const errors = validationResult(req);

  if (!errors.isEmpty()) {
    res.status(400).send({
      message: errors.mapped().cpf.msg,
    });
  } else {
    const { cpf } = req.query.cpf;

    res.send('CPF!');
  }
});

module.exports = router;
