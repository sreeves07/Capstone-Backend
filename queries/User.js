const db = require('../db/Confiq');

//Index
const getAllUser = async () => {
  try {
    const allUser = await db.any('SELECT * FROM mate');
    return allUser;
  } catch (error) {
    return error;
  }
};

//Show
const getUser = async (id) => {
  try {
    const oneUser = await db.any('SELECT * FROM mate WHERE id = $1', id);
    return oneUser;
  } catch (error) {
    return { error: 'ID NOT FOUND' };
  }
};

//Create
const createUser = async (user) => {
  try {
    const newUser = await db.one(
      'INSERT INTO answers (First_Name, Last_Name, Password, Age, Email, City, State, Birthday, Gender, Sexual_Orientation, Has_Pets, Has_Open_Rooms, Is_Smoker, Has_Kids, Is_Disabled, Is_Sharing_bills, Is_Neat, Is_Religious, Move_In_Date, Max_Rent, Credit_Score, Income) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22) RETURNING *',
      [
        user.First_Name,
        user.Last_Name,
        user.Password,
        user.Age,
        user.Email,
        user.City,
        user.State,
        user.Birthday,
        user.Gender,
        user.Sexual_Orientation,
        user.Has_Pets,
        user.Has_Open_Rooms,
        user.Is_Smoker,
        user.Has_Kids,
        user.Is_Disabled,
        user.Is_Sharing_bills,
        user.Is_Neat,
        user.Is_Religious,
        user.Move_In_Date,
        user.Max_Rent,
        user.Credit_Score,
        user.Income,
      ],
    );
    return newUser;
  } catch (error) {
    return error;
  }
};

//Delete
const deleteUser = async (id) => {
  try {
    const deletedUser = await db.one(
      'DELETE FROM mate WHERE id=$1 RETURNING *',
      id,
    );
    return deletedUser;
  } catch (error) {
    return error;
  }
};

//Update
const updateUser = async (id, user) => {
  try {
    const updatedUser = await db.one(
      'UPDATE mate SET First_Name=$1, Last_Name=$2, Password=$3, Age=$4, Email=$5, City=$6, State=$7, Birthday=$8, Gender=$9, Sexual_Orientation=$10, Has_Pets=$11, Has_Open_Rooms=$12, Is_Smoker=$13, Has_Kids=$14, Is_Disabled=$15, Is_Sharing_bills=$16, Is_Neat=$17, Is_Religious=$18, Move_In_Date=$19, Max_Rent=$20, Credit_Score=$21, Income=$22 WHERE id=$23 RETURNING *',
      [
        user.First_Name,
        user.Last_Name,
        user.Password,
        user.Age,
        user.Email,
        user.City,
        user.State,
        user.Birthday,
        user.Gender,
        user.Sexual_Orientation,
        user.Has_Pets,
        user.Has_Open_Rooms,
        user.Is_Smoker,
        user.Has_Kids,
        user.Is_Disabled,
        user.Is_Sharing_bills,
        user.Is_Neat,
        user.Is_Religious,
        user.Move_In_Date,
        user.Max_Rent,
        user.Credit_Score,
        user.Income,
        id,
      ],
    );
    return updatedUser;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllUser, getUser, createUser, updateUser, deleteUser };
