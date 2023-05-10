const db = require('../db/Confiq');

//Index
const getAllBios = async (mate_id) => {
  try {
    const allBios = await db.any('SELECT * FROM bio WHERE mate_id=$1', mate_id);
    return allBios;
  } catch (error) {
    return error;
  }
};

//Show
const getBio = async (id) => {
  try {
    const oneBio = await db.any('SELECT * FROM bio WHERE id=$1', id);
    return oneBio;
  } catch (error) {
    return { error: 'ID NOT FOUND' };
  }
};

//Create
const createBio = async (bio) => {
  try {
    const newBio = await db.one(
      'INSERT INTO bio (mate_id, small_bio) VALUES ($1, $2) RETURNING *',
      [bio.mate_id, bio.Profile_Image],
    );
    return newBio;
  } catch (error) {
    return error;
  }
};

//Delete
const deleteBio = async (id) => {
  try {
    const deletedBio = await db.one(
      'DELETE FROM bio WHERE id=$1 RETURNING *',
      id,
    );
    return deletedBio;
  } catch (error) {
    return error;
  }
};

//Update
const updateBio = async (id, bio) => {
  try {
    const updatedBio = await db.one(
      'UPDATE bio SET small_bio=$1 WHERE id=$2 RETURNING *',
      [bio.small_bio, id],
    );
    return updatedBio;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllBios,
  getBio,
  createBio,
  updateBio,
  deleteBio,
};
