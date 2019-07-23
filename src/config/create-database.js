const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./files/db.db');

db.serialize(() => {
  db.run('CREATE TABLE cpf (cpf CHAR(11), status TEXT)');

  const insertStatement = db.prepare('INSERT INTO cpf (cpf, status) VALUES(?, ?)');


  insertStatement.run('73823782096', 'FREE');
  insertStatement.run('96797809029', 'BLOCK');
  insertStatement.run('91234127040', 'FREE');
  insertStatement.run('62292120054', 'BLOCK');
  insertStatement.run('35161083042', 'FREE');
  insertStatement.run('71820231054', 'BLOCK');

  insertStatement.finalize();
});

db.close();
