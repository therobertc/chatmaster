CREATE DATABASE chartbot_db;

USE chartbot_db;

CREATE TABLE tweets (
    id INT AUTO_INCREMENT, 
    tweet_text VARCHAR(255),
    handle VARCHAR(255),
    PRIMARY KEY(id)
);