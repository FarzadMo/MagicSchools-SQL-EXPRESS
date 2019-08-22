DROP DATABASE IF EXISTS wizards_schools_db;

CREATE DATABASE wizards_schools_db;

USE wizards_schools_db;

CREATE TABLE schooles (
    id INT AUTO_INCREMENT NOT NULL,
    name VARCHAR (30), 
    PRIMARY KEY (id)
);

INSERT INTO schooles (name)
VALUES ("Hogwarts School of Witchcraft");

INSERT INTO schooles (name)
VALUES ("Castelobruxo");

INSERT INTO schooles (name)
VALUES ("Durmstrang Institute");

INSERT INTO schooles (name)
VALUES ("Beauxbatons Academy of Magic");