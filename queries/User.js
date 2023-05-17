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
      'INSERT INTO mate (first_name, last_name, email, city, state, zip_code, birthday, gender, sexual_orientation, has_pets, has_open_rooms, is_smoker, has_kids, is_disabled, is_sharing_bills, is_neat, is_religious, move_in_date, max_rent, credit_score, income, uid) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22) RETURNING *',
      [
        user.first_name,
        user.last_name,
        user.email,
        user.city,
        user.state,
        user.zip_code,
        user.birthday,
        user.gender,
        user.sexual_orientation,
        user.has_pets,
        user.has_open_rooms,
        user.is_smoker,
        user.has_kids,
        user.is_disabled,
        user.is_sharing_bills,
        user.is_neat,
        user.is_religious,
        user.move_in_date,
        user.max_rent,
        user.credit_score,
        user.income,
        user.uid,
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
      'UPDATE mate SET first_name=$1, last_name=$2, email=$3, city=$4, state=$5, zip_code=$6, birthday=$7, gender=$8, sexual_orientation=$9, has_pets=$10, has_open_rooms=$11, is_smoker=$12, has_kids=$13, is_disabled=$14, is_sharing_bills=$15, is_neat=$16, is_religious=$17, move_in_date=$18, max_rent=$19, credit_score=$20, income=$21, uid=$22 WHERE id=$23 RETURNING *',
      [
        user.first_name,
        user.last_name,
        user.email,
        user.city,
        user.state,
        user.zip_code,
        user.birthday,
        user.gender,
        user.sexual_orientation,
        user.has_pets,
        user.has_open_rooms,
        user.is_smoker,
        user.has_kids,
        user.is_disabled,
        user.is_sharing_bills,
        user.is_neat,
        user.is_religious,
        user.move_in_date,
        user.max_rent,
        user.credit_score,
        user.income,
        user.uid,
        id,
      ],
    );
    return updatedUser;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllUser, getUser, createUser, updateUser, deleteUser };
