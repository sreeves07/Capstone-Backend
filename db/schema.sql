DROP DATABASE IF EXISTS bestmates_app;
CREATE DATABASE bestmates_app;

\c bestmates_app;

DROP TABLE IF EXISTS bestmates_app;

CREATE TABLE mate (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(40),
    last_name VARCHAR(40),
    email VARCHAR(60), 
    city VARCHAR(40),
    state VARCHAR(40),
    zip_code INT,
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
    income INT,
    uid VARCHAR(40)
);

DROP TABLE IF EXISTS answers;

CREATE TABLE answers ( 
    id SERIAL PRIMARY KEY,
    gender_preference VARCHAR(20),
    pets_preference BOOLEAN,
    sexual_orientation_preference TEXT,
    open_rooms_preference BOOLEAN,
    neat_preference BOOLEAN,
    kids_preference BOOLEAN,
    low_noise_preference BOOLEAN,
    smoker_preference BOOLEAN,
    high_rise_preference BOOLEAN,
    house_preference BOOLEAN,
    private_bathroom_preference BOOLEAN,
    private_room_preference BOOLEAN,
    share_bills_preference BOOLEAN,
    religious_preference BOOLEAN,
    good_credit_preference BOOLEAN,
    high_income_preference BOOLEAN,
    mate_id INTEGER REFERENCES mate (id)
    ON DELETE CASCADE
);
    
DROP TABLE IF EXISTS images;
    
CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    profile_image TEXT,
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
    mateId_liked_user INT,
    mate_id INTEGER REFERENCES mate (id)
    ON DELETE CASCADE
);
