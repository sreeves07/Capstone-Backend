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
      'UPDATE mate SET first_name=$1, last_name=$2, city=$3, state=$4, zip_code=$5, birthday=$6, gender=$7, sexual_orientation=$8, has_pets=$9, has_open_rooms=$10, has_private_room=$11, has_private_bathroom=$12, has_house=$13, has_high_rise=$14, is_smoker=$15, has_kids=$16, is_disabled=$17, is_sharing_bills=$18, is_neat=$19, is_religious=$20, is_musician=$21, is_partyhost=$22, is_employed=$23, low_noise=$24, move_in_date=$25, max_rent=$26, credit_score=$27, income=$28 WHERE uid=$29 RETURNING *',
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
        user.has_private_bathroom,
        user.has_private_room,
        user.has_house,
        user.has_high_rise,
        user.is_smoker,
        user.has_kids,
        user.is_disabled,
        user.is_sharing_bills,
        user.is_neat,
        user.is_religious,
        user.is_musician,  
        user.is_partyhost,  
        user.is_employed,
        user.low_noise,
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
const updateRegisteredUser = async (uid) => {
  try {
    const updatedRegisteredUser = await db.one(
      'UPDATE mate SET first_name=$1, last_name=$2, email=$3, city=$4, state=$5, zip_code=$6, birthday=$7, gender=$8, sexual_orientation=$9, has_pets=$10, has_open_rooms=$11, has_private_room=$12, has_private_bathroom=$13, has_house=$14, has_high_rise=$15, is_smoker=$16, has_kids=$17, is_disabled=$18, is_sharing_bills=$19, is_neat=$20, is_religious=$21,  is_musician=$22, is_partyhost=$23, is_employed=$24, low_noise=$25, move_in_date=$26, max_rent=$27, credit_score=$28, income=$29 WHERE uid=$30 RETURNING *',
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
      user.has_private_bathroom,
      user.has_private_room,
      user.has_house,
      user.has_high_rise,
      user.is_smoker,
      user.has_kids,
      user.is_disabled,
      user.is_sharing_bills,
      user.is_neat,
      user.is_religious,
      user.is_musician,  
      user.is_partyhost,  
      user.is_employed,
      user.low_noise,
      user.move_in_date,
      user.max_rent,
      user.credit_score,
      user.income,
      uid,
    ],
  )
  return updatedRegisteredUser
  } catch (error) {
    return error
  }
}

//Update
const updateUser = async (uid, user) => {
  try {
    const updatedUser = await db.one(
      'UPDATE mate SET first_name=$1, last_name=$2, email=$3, city=$4, state=$5, zip_code=$6, birthday=$7, gender=$8, sexual_orientation=$9, has_pets=$10, has_open_rooms=$11, has_private_room=$12, has_private_bathroom=$13, has_house=$14, has_high_rise=$14 is_smoker=$15, has_kids=$16, is_disabled=$17, is_sharing_bills=$18, is_neat=$19, is_religious=$20, is_employed=$21, is_musician=$22, is_partyhost=$23, low_noise=$23, move_in_date=$24, max_rent=$25, credit_score=$26, income=$27 WHERE uid=$28 RETURNING *',
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
        user.has_private_room,
        user.has_private_bathroom,
        user.has_house,
        user.has_high_rise,
        user.is_smoker,
        user.has_kids,
        user.is_disabled,
        user.is_sharing_bills,
        user.is_neat,
        user.is_religious,
        user.is_employed,
        user.is_musician,  
        user.is_partyhost,
        user.low_noise,  
        user.move_in_date,
        user.max_rent,
        user.credit_score,
        user.income,
        uid
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
