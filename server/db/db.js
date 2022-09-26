import mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Qq121212.',
  database: 'ping',
});

connection.connect((err) => {
  if (err) throw err;
  console.log('Connected to datebase server');
});

connection.query('create database if not exists ping', (err) => {
  if (err) throw err;
  console.log('Database "ping" created');
});

connection.query(
  'create table if not exists Vozilo(\n' +
    'VoziloId int not null AUTO_INCREMENT,\n' +
    'Marka varchar(255) not null,\n' +
    'Tip varchar(255) not null,\n' +
    'BrojSasije varchar(255) not null,\n' +
    'BrojMotora varchar(255) not null,\n' +
    'SnagaMotora int not null,\n' +
    'VrstaGoriva varchar(255) not null,\n' +
    'GodinaProizvodnje int not null,\n' +
    'primary key(VoziloId)\n' +
    ')',
  (err) => {
    if (err) throw err;
    console.log("Table 'vozilo' created");
  }
);

connection.query(
  'create table if not exists putni_nalog(' +
    'PutniNalogId int AUTO_INCREMENT not null,\n' +
    'DatumPolaska datetime not null,\n' +
    'DatumPovratka datetime not null,\n' +
    'MjestoPolaska text not null,\n' +
    'MjestoPovratka text not null,\n' +
    'BrojPutnika int not null,\n' +
    'Vozac varchar(255) not null,\n' +
    'VoziloId int not null,\n' +
    'Akcija varchar(255) not null,\n'+
    'primary key(PutniNalogId),\n' +
    'foreign key (VoziloId) references vozilo(VoziloId)\n' +
    ')',
  (err) => {
    if (err) throw err;
    console.log("Table 'putni_nalog' created");
  }
);

export const getConnection = () => {
  return connection;
};
