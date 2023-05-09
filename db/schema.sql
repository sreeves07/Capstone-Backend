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
    Egitmail VARCHAR(60), 
    City VARCHAR(40),
    State VARCHAR(40),
    Birthday DATE,
    Gender VARCHAR(20)
    Orientation VARCHAR(50),
    Has_Pets BOOLEAN, 
    Has_Open_Rooms BOOLEAN,
    Is_Smoker BOOLEAN
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

