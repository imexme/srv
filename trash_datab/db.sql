
-- \c postgres      to connect or enter
-- \d             list all tables
-- \d                 users
-- \d drivers to enter
--
-- no user name
-- database letsroll
-- password klassik
--


Insert data into rows

INSERT INTO drivers (id, name, surname, type , price,rating, city , password ) VALUES  (12, 'Adam','B', 500, 'Uppsala', 15:00-16:00 );

INSERT INTO Drivers (id, name, surname, type , price, rating, city , password  )
VALUES  ((12, 'Adam', 'Larsson', 'B', 500, '5' 'Uppsala', 'zxc123' );
VALUES
    (12, 'Adam','B', 500, 'Uppsala');


DROP TABLE drivers




    (value_list_2),

add COLUMN to tables

ALTER TABLE drivers ADD COLUMN city varchar(50);

drop table lessons

select * from drivers;   // show all inside drivers


 CREATE TABLE lessons (
    id BIGSERIAL NOT NULL PRIMARY  KEY,
    userid VARCHAR(100) NOT NULL,
    driverid VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    date DATE NOT NULL,
    time TIME NOT NULL
 );







  CREATE TABLE users (
    id BIGSERIAL NOT NULL,
    name VARCHAR(100) NOT NULL,
    surname VARCHAR (100) NOT NULL,
    city VARCHAR NOT NULL,
    type VARCHAR NOT NULL
  );

    CREATE TABLE drivers (
       id BIGSERIAL NOT NULL,
       name VARCHAR(100) NOT NULL,
       surname VARCHAR (100) NOT NULL,
        type VARCHAR NOT NULL,
       price INT NOT NULL,
       city VARCHAR NOT NULL
    );


select * from drivers
select * from drivers where drivers.id = 24
