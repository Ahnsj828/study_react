CREATE DATABASE malldb;



CREATE USER 'malldbuser'@'localhost' IDENTIFIED BY 'malldbuser';
CREATE USER 'malldbuser'@'%' IDENTIFIED  BY 'malldbuser';

GRANT ALL PRIVILEGES ON malldb.* TO 'malldbuser'@'localhost';
GRANT ALL PRIVILEGES ON malldb.* TO 'malldbuser'@'%';