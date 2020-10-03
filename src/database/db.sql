use crudnodejs;

create table customer(
    id int(6) NOT NULL UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    addres VARCHAR(100) NOT NULL,
    telephone VARCHAR(15)
);

show table;

describe customer;