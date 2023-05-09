const db = require('../db/Confiq');

//Index
const getAllAnswers = async (mate_id) => {
  try {
    const allAnswer = await db.any(
      'SELECT * FROM answers WHERE mate_id=$1',
      mate_id,
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
      'INSERT INTO answers (mate_id, Pets_Preference, Sexual_Orientation_Preference, Open_Rooms_Preference, Neat_Preference, Kids_Preference, Low_Noise_Preference, Smoker_Preference, High_Rise_Preference, House_Preference, Private_Bathroom_Preference, Private_Room_Preference, Share_Bills_Preference, Religious_Preference, Good_Credit_Preference, High_Income_Preference) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16, $17, $18, $19, $20, $21, $22) RETURNING *',
      [
        answer.mate_id,
        answer.Pets_Preference,
        answer.Sexual_Orientation_Preference,
        answer.Open_Rooms_Preference,
        answer.Neat_Preference,
        answer.Kids_Preference,
        answer.Low_Noise_Preference,
        answer.Smoker_Preference,
        Religious_Preference,
        answer.High_Rise_Preference,
        answer.SHouse_Preference,
        answer.Private_Bathroom_Preference,
        answer.Share_Bills_Preference,
        answer.Religious_Preference,
        answer.Good_Credit_Preference,
        answer.High_Income_Preference,
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
      'DELETE FROM answer WHERE id=$1 RETURNING *',
      id,
    );
    return deletedAnswer;
  } catch (error) {
    return error;
  }
};

//Update
const updateAnswer = async (id, answer) => {
  try {
    const updatedAnswer = await db.one(
      'UPDATE answer SET Pets_Preference=$1, Sexual_Orientation_Preference=$2, Open_Rooms_Preference=$3, Neat_Preference=$4, Kids_Preference=$5, Low_Noise_Preference,=$6 Smoker_Preference=$7, High_Rise_Preference, House_Preference=$8, Private_Bathroom_Preference=$9, Private_Room_Preference=$10, Share_Bills_Preference,=$11 Religious_Preference=$12, Good_Credit_Preference=$13, High_Income_Preference=$14 WHERE id=$15 RETURNING *',
      [
        answer.mate_id,
        answer.Pets_Preference,
        answer.Sexual_Orientation_Preference,
        answer.Open_Rooms_Preference,
        answer.Neat_Preference,
        answer.Kids_Preference,
        answer.Low_Noise_Preference,
        answer.Smoker_Preference,
        Religious_Preference,
        answer.High_Rise_Preference,
        answer.SHouse_Preference,
        answer.Private_Bathroom_Preference,
        answer.Share_Bills_Preference,
        answer.Religious_Preference,
        answer.Good_Credit_Preference,
        answer.High_Income_Preference,
        id,
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
