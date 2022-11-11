DROP DATABASE IF EXISTS jobsearcher_db;
CREATE DATABASE jobsearcher_db;

USE jobsearcher_db;

CREATE TABLE profile (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
bio TEXT,
skills SET ,
education SET,
social_media SET
);

CREATE TABLE jobs (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
job_title VARCHAR(30),
job_description TEXT,
salary DECIMAL
);
