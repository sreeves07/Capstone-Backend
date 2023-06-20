DROP DATABASE IF EXISTS bestmates_app;
CREATE DATABASE bestmates_app;

\c bestmates_app;

DROP TABLE IF EXISTS bestmates_app;

CREATE TABLE mate (
    id SERIAL,
    uid VARCHAR(40) PRIMARY KEY,
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
    has_private_room BOOLEAN,
    has_private_bathroom BOOLEAN,
    has_house BOOLEAN,
    has_high_rise BOOLEAN,
    is_smoker BOOLEAN,
    has_kids BOOLEAN,
    is_sharing_bills BOOLEAN,
    is_neat BOOLEAN,
    is_employed BOOLEAN,
    low_noise BOOLEAN,
    is_religious BOOLEAN,
    is_musician BOOLEAN,
    is_partyhost BOOLEAN,
    is_disabled BOOLEAN,
    move_in_date DATE,
    max_rent INT,
    credit_score INT,
    income INT
);

DROP TABLE IF EXISTS answers;

CREATE TABLE answers ( 
    id SERIAL PRIMARY KEY,
    mate_uid VARCHAR(40),
    gender_preference VARCHAR(20),
    pets_preference BOOLEAN,
    sexual_orientation_preference VARCHAR(20),
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
    disability_preference BOOLEAN,
    musician_preference BOOLEAN,
    partyhost_preference BOOLEAN,
    employed_preference BOOLEAN,
    CONSTRAINT fk0_mate
      FOREIGN KEY(mate_uid) 
	    REFERENCES mate(uid)
    ON DELETE CASCADE
);
    

DROP TABLE IF EXISTS liked_users;

CREATE TABLE liked_user (
    id SERIAL PRIMARY KEY,
    mate_uid VARCHAR(40),
    liked_mate_uid VARCHAR(40),
    CONSTRAINT fk1_mate
      FOREIGN KEY(mate_uid) 
	    REFERENCES mate(uid),
    CONSTRAINT fk2_mate
      FOREIGN KEY(liked_mate_uid) 
	    REFERENCES mate(uid)
    ON DELETE CASCADE
);

DROP TABLE IF EXISTS images;

CREATE TABLE images (
    id SERIAL PRIMARY KEY,
    mate_uid VARCHAR(40),
    profile_image TEXT,
    CONSTRAINT fk3_mate
      FOREIGN KEY(mate_uid) 
	    REFERENCES mate(uid)
    ON DELETE CASCADE
);

DROP TABLE IF EXISTS bio;

CREATE TABLE bio (
    id SERIAL PRIMARY KEY,
    mate_uid VARCHAR(40),
    small_bio VARCHAR(70),
    CONSTRAINT fk4_mate
      FOREIGN KEY(mate_uid) 
	    REFERENCES mate(uid)
    ON DELETE CASCADE
);