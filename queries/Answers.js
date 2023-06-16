const db = require('../db/Confiq');

//Index
const getAllAnswers = async (uid) => {
  try {
    const allAnswer = await db.any(
      'SELECT * FROM answers WHERE mate_uid=$1',
      uid,
    );
    return allAnswer;
  } catch (error) {
    return error;
  }
};

//Show
const getAnswer = async (id) => {
  try {
    const oneAnswer = await db.any('SELECT * FROM answers WHERE id=$1', id);
    return oneAnswer;
  } catch (error) {
    return { error: 'ID NOT FOUND' };
  }
};

//Create
const createAnswer = async (answer) => {
  try {
    const newUser = await db.one(
      'INSERT INTO answers (mate_uid, gender_preference, pets_preference, sexual_orientation_preference, open_rooms_preference, neat_preference, kids_preference, low_noise_preference, smoker_preference, high_rise_preference, house_preference, private_bathroom_preference, private_room_preference, share_bills_preference, religious_preference, good_credit_preference, high_income_preference, disability_preference, musician_preference, partyhost_preference, employed_preference) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21) RETURNING *',
      [
        answer.mate_uid,
        answer.gender_preference,
        answer.pets_preference,
        answer.sexual_orientation_preference,
        answer.open_rooms_preference,
        answer.neat_preference,
        answer.kids_preference,
        answer.low_noise_preference,
        answer.smoker_preference,
        answer.high_rise_preference,
        answer.house_preference,
        answer.private_bathroom_preference,
        answer.private_room_preference,
        answer.share_bills_preference,
        answer.religious_preference,
        answer.good_credit_preference,
        answer.high_income_preference,
        answer.disability_preference,  
        answer.musician_preference,  
        answer.partyhost_preference,  
        answer.employed_preference,
      ],
    );
    return newUser;
  } catch (error) {
    return error;
  }
};

//Delete
const deleteAnswer = async (id) => {
  try {
    const deletedAnswer = await db.one(
      'DELETE FROM answers WHERE id=$1 RETURNING *',
      id,
    );
    return deletedAnswer;
  } catch (error) {
    return error;
  }
};

//Update
const updateAnswer = async (uid, answer) => {
  try {
    const updatedAnswer = await db.one(
      'UPDATE answers SET gender_preference=$1, pets_preference=$2, sexual_orientation_preference=$3, open_rooms_preference=$4, neat_preference=$5, kids_preference=$6, low_noise_preference=$7, smoker_preference=$8, high_rise_preference=$9, house_preference=$10, private_bathroom_preference=$11, private_room_preference=$12, share_bills_preference=$13, religious_preference=$14, good_credit_preference=$15, high_income_preference=$16, disability_preference=$17, musician_preference=$18, partyhost_preference=$19, employed_preference=$20, WHERE uid=$21 RETURNING *',
      [
        answer.gender_preference,
        answer.pets_preference,
        answer.sexual_orientation_preference,
        answer.open_rooms_preference,
        answer.neat_preference,
        answer.kids_preference,
        answer.low_noise_preference,
        answer.smoker_preference,
        answer.high_rise_preference,
        answer.house_preference,
        answer.private_bathroom_preference,
        answer.private_room_preference,
        answer.share_bills_preference,
        answer.religious_preference,
        answer.good_credit_preference,
        answer.high_income_preference,
        answer.disability_preference,  
        answer.musician_preference,  
        answer.partyhost_preference,  
        answer.employed_preference,
        uid,
      ],
    );
    return updatedAnswer;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllAnswers,
  getAnswer,
  createAnswer,
  updateAnswer,
  deleteAnswer,
};
