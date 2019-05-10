const validateCpf = (cpf) => {
  const cleanedUpCpf = cpf.replace(/[^\d]+/g, '');	

  if (cleanedUpCpf === '') {
    return false;
  }

  if (cleanedUpCpf.length !== 11
      || cleanedUpCpf === '00000000000'
      || cleanedUpCpf === '11111111111'
      || cleanedUpCpf === '22222222222'
      || cleanedUpCpf === '22222222222'
      || cleanedUpCpf === '22222222222'
      || cleanedUpCpf === '33333333333'
      || cleanedUpCpf === '44444444444'
      || cleanedUpCpf === '55555555555'
      || cleanedUpCpf === '66666666666'
      || cleanedUpCpf === '77777777777'
      || cleanedUpCpf === '88888888888'
      || cleanedUpCpf === '99999999999') {
    return false;
  }

  let add = 0;
  for (let i = 0; i < 9; i += 1) {
    add += parseInt(cleanedUpCpf.charAt(i), 10) * (10 - i);
  }

  let rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) {
    rev = 0;
  }

  if (rev !== parseInt(cleanedUpCpf.charAt(9), 10)) {
    return false;
  }

  add = 0;
  for (let i = 0; i < 10; i += 1) {
    add += parseInt(cleanedUpCpf.charAt(i), 10) * (11 - i);
  }

  rev = 11 - (add % 11);
  if (rev === 10 || rev === 11) {
    rev = 0;
  }

  if (rev !== parseInt(cleanedUpCpf.charAt(10), 10)) {
    return false;
  }

  return true;
};

module.exports = validateCpf;
