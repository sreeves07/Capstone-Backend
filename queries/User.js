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
const getUser = async (uid) => {
  try {
    const oneUser = await db.any('SELECT * FROM mate WHERE uid = $1', uid);
    return oneUser;
  } catch (error) {
    return { error: 'ID NOT FOUND' };
  }
};

//Create
const createUser = async (uid, user) => {
  try {
    const newUser = await db.one(
      'UPDATE mate SET first_name=$1, last_name=$2, city=$3, state=$4, zip_code=$5, birthday=$6, gender=$7, sexual_orientation=$8, has_pets=$9, has_open_rooms=$10, is_smoker=$11, has_kids=$12, is_disabled=$13, is_sharing_bills=$14, is_neat=$15, is_religious=$16, move_in_date=$17, max_rent=$18, credit_score=$19, income=$20 WHERE uid=$21 RETURNING *',
      [
        user.first_name,
        user.last_name,
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
        uid
      ],
    );
    return newUser;
  } catch (error) {
    return error;
  }
};

//Register User
const registerUser= async (auth) => {
  try {
    const newRegister = await db.one('INSERT INTO mate (uid, email) VALUES ($1, $2) RETURNING *',
    [auth.uid, auth.email]
    );
    return newRegister
  } catch (error) {
    return error
  }
}

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

//Update Registered User
const updateRegisteredUser = async (id) => {
  try {
    const updatedRegisteredUser = await db.one(
      'UPDATE mate SET first_name=$1, last_name=$2, city=$3, state=$4, zip_code=$5, birthday=$6, gender=$7, sexual_orientation=$8, has_pets=$9, has_open_rooms=$10, is_smoker=$11, has_kids=$12, is_disabled=$13, is_sharing_bills=$14, is_neat=$15, is_religious=$16, move_in_date=$17, max_rent=$18, credit_score=$19, income=$20, uid=$21 WHERE id=$22 RETURNING *',
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
  )
  return updatedRegisteredUser
  } catch (error) {
    return error
  }
}

//Update
const updateUser = async (id, user) => {
  try {
    const updatedUser = await db.one(
      'UPDATE mate SET first_name=$1, last_name=$2, email=$3, city=$4, state=$5, zip_code=$6, birthday=$7, gender=$8, sexual_orientation=$9, has_pets=$10, has_open_rooms=$11, is_smoker=$12, has_kids=$13, is_disabled=$14, is_sharing_bills=$15, is_neat=$16, is_religious=$17, move_in_date=$18, max_rent=$19, credit_score=$20, income=$21, profile_image=$22, small_bio=$23, uid=$24 WHERE id=$25 RETURNING *',
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

const getFilteredUsers = async () => {
  try {
    const filteredUsers = await db.any(`SELECT * FROM users WHERE pets_preference = ${pets_preference} AND open_rooms_preference = ${open_rooms_preference} AND `)
  } catch (error) {
    return error
  }
}
;

//
// gender_preference VARCHAR(20),
// pets_preference BOOLEAN,
// sexual_orientation_preference VARCHAR(20),
// open_rooms_preference BOOLEAN,
// neat_preference BOOLEAN,
// kids_preference BOOLEAN,
// low_noise_preference BOOLEAN,
// smoker_preference BOOLEAN,
// high_rise_preference BOOLEAN,
// house_preference BOOLEAN,
// private_bathroom_preference BOOLEAN,
// private_room_preference BOOLEAN,
// share_bills_preference BOOLEAN,
// religious_preference BOOLEAN,
// good_credit_preference BOOLEAN,
// high_income_preference BOOLEAN,
// const filterMap = {
//   'Has Good Credit': 'good_credit_preference',

// }

// //
// const getPreferencesArray = (preferences) => {
//   preferences.forEach((elem) =>  filterMap[elem])
// }

// //

// const getPreferred = async (preferenceArray) => {
//   try {
//     const allUserPreferences = await db.any('SELECT * FROM answers WHERE preferences = true')
//   } catch (error) {
//     return error
//   }
// }

module.exports = { getAllUser, getUser, createUser, updateUser, deleteUser, registerUser, updateRegisteredUser };
