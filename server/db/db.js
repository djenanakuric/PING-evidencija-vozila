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
  'create table if not exists Car(\n' +
    'Id int not null AUTO_INCREMENT,\n' +
    'CarModel varchar(255) not null,\n' +
    'CarType varchar(255) not null,\n' +
    'CarNumber varchar(50) not null,\n' +
    'MotorNumber varchar(50) not null,\n' +
    'MotorPower int not null,\n' +
    'MotorPowerUnit varchar(5) not null,\n' +
    'Flue varchar(25) not null,\n' +
    'YearManufactured int not null,\n' +
    'primary key(Id)\n' +
    ')',
  (err) => {
    if (err) throw err;
    console.log("Table 'Car' created");
  }
);

connection.query(
  'create table if not exists Travel_Application(' +
    'Id int AUTO_INCREMENT not null,\n' +
    'StartDate datetime not null,\n' +
    'EndDate datetime not null,\n' +
    'StartPoint text not null,\n' +
    'EndPoint text not null,\n' +
    'NumberOfPassengers int not null,\n' +
    'Driver varchar(255) not null,\n' +
    'CarId int not null,\n' +
    'Status varchar(255) not null,\n'+
    'primary key(Id),\n' +
    'foreign key (CarId) references Car(Id)\n' +
    ')',
  (err) => {
    if (err) throw err;
    console.log("Table 'Travel_Application' created");
  }
);

export const getConnection = () => {
  return connection;
};
