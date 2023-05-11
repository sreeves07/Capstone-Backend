DROP DATABASE IF EXISTS bestmates_app;
CREATE DATABASE bestmates_app;

\c bestmates_app;

DROP TABLE IF EXISTS bestmates_app;

CREATE TABLE mate (
    id SERIAL PRIMARY KEY,
    First_Name VARCHAR(40),
    Last_Name VARCHAR(40),
    Password VARCHAR(40),
    Age INT,
    Email VARCHAR(60), 
    City VARCHAR(40),
    State VARCHAR(40),
    Birthday DATE,
    Gender VARCHAR(20),
    Sexual_Orientation VARCHAR(50),
    Has_Pets BOOLEAN, 
    Has_Open_Rooms BOOLEAN,
    Is_Smoker BOOLEAN,
    Has_Kids BOOLEAN,
    Is_Disabled BOOLEAN,
    Is_Sharing_bills BOOLEAN,
    Is_Neat BOOLEAN,
    Is_Religious BOOLEAN,
    Move_In_Date DATE,
    Max_Rent INT,
    Credit_Score INT,
    Income INT
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
