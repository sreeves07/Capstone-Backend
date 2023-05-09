\c bestmates_app

INSERT INTO mate (First_Name, Last_Name, Password, Age, Email, City, State, Birthday, Gender, Sexual_Orientation, Has_Pets, Has_Open_Rooms, Is_Smoker, Has_Kids, Is_Disabled, Is_Sharing_bills, Is_Neat, Is_Religious, Move_In_Date, Max_Rent, Credit_Score, Income)
VALUES 
    ('John', 'Doe', 'Green256', 25, 'john.doe@gmail.com', 'New York City', 'NY', '1998-06-01', 'Male', 'Straight', true, false, false, false, false, true, true, true, '2023-06-01', 1500, 750, 50000),
    ('Jane', 'Smith', 'Green256', 32, 'jane.smith@hotmail.com', 'Los Angeles', 'CA', '1991-09-12', 'Female', 'Bisexual', false, true, true, true, false, true, false, false, '2023-06-01', 1800, 800, 60000),
    ('Mike', 'Johnson', 'Green256', 40, 'mike.johnson@yahoo.com', 'Chicago', 'IL', '1983-04-08', 'Male', 'Gay', true, false, false, true, false, false, true, false, '2023-06-15', 1200, 700, 40000),
    ('Sarah', 'Lee', 'Green256', 28, 'sarah.lee@gmail.com', 'Houston', 'TX', '1995-02-14', 'Female', 'Straight', true, false, true, false, false, true, false, true, '2023-06-01', 1300, 650, 45000),
    ('Tom', 'Wang', 'Green256', 23, 'tom.wang@hotmail.com', 'San Francisco', 'CA', '1998-08-23', 'Male', 'Bisexual', false, true, false, false, false, true, true, false, '2023-06-15', 1700, 750, 55000),
    ('Emily', 'Davis', 'Green256', 31, 'emily.davis@gmail.com', 'Miami', 'FL', '1990-12-03', 'Female', 'Lesbian', true, false, false, true, true, true, false, true, '2023-06-01', 1400, 700, 50000),
    ('David', 'Nguyen', 'Green256', 27, 'david.nguyen@yahoo.com', 'Seattle', 'WA', '1994-07-11', 'Male', 'Straight', true, true, true, false, false, false, true, false, '2023-06-15', 1600, 800, 65000),
    ('Karen', 'Brown', 'Green256', 36, 'karen.brown@gmail.com', 'Boston', 'MA', '1985-01-29', 'Female', 'Bisexual', true, true, true, true, true, true, true, true, '2023-06-01', 1900, 850, 75000),
    ('Chris', 'Garcia', 'Green256', 22, 'chris.garcia@hotmail.com', 'Austin', 'TX', '1999-05-09', 'Male', 'Straight', false, false, true, false, false, false, false, true, '2023-06-15', 2000, 725, 80000),
    ('Lisa', 'Taylor', 'Green256', 29, 'lisa.taylor@gmail.com', 'Denver', 'CO', '1992-11-18', 'Female', 'Pansexual', false, false, false, true, false, false, true, false, '2023-06-15', 1700, 770, 47000),
    ('Mark', 'Chen', 'Green256', 33, 'mark.chen@yahoo.com', 'San Diego', 'CA', '1988-03-27', 'Male', 'Straight', true, true, true, true, true, true, true, true, '2023-07-01', 1950, 550, 55000),
    ('Laura', 'Gonzalez', 'Green256', 26, 'laura.gonzalez@hotmail.com', 'Phoenix', 'AZ', '1995-10-05', 'Female', 'Straight', false, false, false, false, false, true, true, true, '2023-06-01', 2500, 750, 150000),
    ('Kevin', 'Wilson', 'Green256', 38, 'kevin.wilson@gmail.com', 'Portland', 'OR', '1983-08-14', 'Male', 'Gay', true, true, true, true, false, true, false, false, '2023-06-01', 1850, 600, 65000),
    ('Sara', 'Harris', 'Green256', 30, 'sara.harris@hotmail.com', 'Dallas', 'TX', '1991-12-22', 'Female', 'Bisexual', false, true, false, false, false, true, true, false, '2023-07-15', 1700, 750, 55000),
    ('Steven', 'Jackson', 'Green256', 24, 'steven.jackson@yahoo.com', 'Las Vegas', 'NV', '1997-09-03', 'Male', 'Straight', true,  true, true, true, false, true, true, true, '2023-06-01', 2000, 590, 95000),
    ('Catherine', 'Martin', 'Green256', 35, 'catherine.martin@gmail.com', 'Philadelphia', 'PA', '1986-05-18', 'Female', 'Lesbian', true, false, false, true, false, false, true, false, '2023-07-15', 2700, 670, 67000),
    ('Alex', 'Lee', 'Green256', 21, 'alex.lee@hotmail.com', 'Minneapolis', 'MN', '2000-01-02', 'Non-binary', 'Queer', true, false, false, false, false, false, true, false, '2023-06-15', 1350, 750, 85000);

INSERT INTO answers (mate_id, Pets_Preference, Sexual_Orientation_Preference, Open_Rooms_Preference, Neat_Preference, Kids_Preference, Low_Noise_Preference, Smoker_Preference, High_Rise_Preference, House_Preference, Private_Bathroom_Preference, Private_Room_Preference, Share_Bills_Preference, Religious_Preference, Good_Credit_Preference, High_Income_Preference)
VALUES
    ('1', true, 'Pansexual', false, true, false, false, false, false, true, true, true, true, true, true, true),
    ('2',false, 'Heterosexual', false, true, false, false, false, false, true, true, true, true, true, true, true),
    ('3',false, 'Heterosexual', true, false, false, false, false, true, true, true, true, true, true, true, false),
    ('4',false, 'Heterosexual', false, true, false, false, false, false, true, true, true, true, true, true, true),
    ('5',false, 'Homosexual', false, true, false, false, false, false, true, true, true, true, true, true, true),
    ('6',true, 'Heterosexual', false, true, false, false, false, false, true, true, true, true, true, true, true),
    ('7',false, 'Homosexual', false, true, false, false, false, false, true, true, true, true, true, true, true),
    ('8',false, 'Heterosexual', false, true, false, false, false, false, true, true, true, true, true, true, true),
    ('9',true, 'Pansexual', false, true, false, false, false, false, true, true, true, true, true, true, true),
    ('10',true, 'Bisexual', false, true, false, false, false, false, true, true, true, true, true, true, true),
    ('11',false, 'Heterosexual', false, true, false, false, false, false, true, true, true, true, true, true, true),
    ('12',false, 'Heterosexual', false, true, false, false, false, false, true, true, true, true, true, true, true),
    ('13',false, 'Heterosexual', false, true, false, false, false, false, true, true, true, true, true, true, true),
    ('14',false, 'Homosexual', false, true, false, false, false, false, true, true, true, true, true, true, true),
    ('15',true, 'Heterosexual', false, true, false, false, false, false, true, true, true, true, true, true, true),
    ('16',false, 'Homosexual', false, true, false, false, false, false, true, true, true, true, true, true, true),
    ('17',false, 'Heterosexual', false, true, false, false, false, false, true, true, true, true, true, true, true);

