DROP DATABASE IF EXISTS bestmates_app;
CREATE DATABASE bestmates_app;

\c bestmates_app;

DROP TABLE IF EXISTS bestmates_app;

CREATE TABLE mate (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(40),
    last_name VARCHAR(40),
    password VARCHAR(40),
    age INT,
    email VARCHAR(60), 
    city VARCHAR(40),
    state VARCHAR(40),
    birthday DATE,
    gender VARCHAR(20),
    sexual_orientation VARCHAR(50),
    has_pets BOOLEAN, 
    has_open_rooms BOOLEAN,
    is_smoker BOOLEAN,
    has_kids BOOLEAN,
    is_disabled BOOLEAN,
    is_sharing_bills BOOLEAN,
    is_neat BOOLEAN,
    is_religious BOOLEAN,
    move_in_date DATE,
    max_rent INT,
    credit_score INT,
    income INT
);

DROP TABLE IF EXISTS answers;

CREATE TABLE answers ( 
    id SERIAL PRIMARY KEY,
    Gender_Preference VARCHAR(20),
    Pets_Preference BOOLEAN,
    Sexual_Orientation_Preference TEXT,
    Open_Rooms_Preference BOOLEAN,
    Neat_Preference BOOLEAN,
    Kids_Preference BOOLEAN,
    Low_Noise_Preference BOOLEAN,
    Smoker_Preference BOOLEAN,
    High_Rise_Preference BOOLEAN,
    House_Preference BOOLEAN,
    Private_Bathroom_Preference BOOLEAN,
    Private_Room_Preference BOOLEAN,
    Share_Bills_Preference BOOLEAN,
    Religious_Preference BOOLEAN,
    Good_Credit_Preference BOOLEAN,
    High_Income_Preference BOOLEAN,
    mate_id INTEGER REFERENCES mate (id)
    ON DELETE CASCADE
);
    
DROP TABLE IF EXISTS images;
    
CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    Profile_Image TEXT,
    mate_id INTEGER REFERENCES mate (id)
    ON DELETE CASCADE
);

DROP TABLE IF EXISTS bio;

CREATE TABLE bio (
    id SERIAL PRIMARY KEY,
    small_bio VARCHAR(70),
    mate_id INTEGER REFERENCES mate (id)
    ON DELETE CASCADE
);

DROP TABLE IF EXISTS liked_user;

CREATE TABLE liked_user (
    id SERIAL PRIMARY KEY,
    MateId_liked_user INT,
    mate_id INTEGER REFERENCES mate (id)
    ON DELETE CASCADE
);
