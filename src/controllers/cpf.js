import CpfDb from '../db/cpf';

const cpfDb = new CpfDb();

async function getCpf(cpf) {
  const res = await cpfDb.find(`SELECT cpf, status FROM cpf WHERE cpf = '${cpf}'`);
  return res[0];
}

async function countCpfsOnBlacklist() {
  const res = await cpfDb.find('SELECT cpf, status FROM cpf WHERE status = \'BLOCK\'');
  return res.length;
}

module.exports = {
  getCpf,
  countCpfsOnBlacklist,
};
