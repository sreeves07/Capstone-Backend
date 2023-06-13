const db = require('../db/Confiq');

//Index
const getAllImages = async (uid) => {
  try {
    const allImages = await db.any(
      'SELECT * FROM images WHERE mate_uid=$1',
      uid,
    );
    return allImages;
  } catch (error) {
    return error;
  }
};

//Show
const getImage = async (id) => {
  try {
    const oneImage = await db.any('SELECT * FROM images WHERE id=$1', id);
    return oneImage;
  } catch (error) {
    return { error: 'ID NOT FOUND' };
  }
};

//Create
const createImage = async (image) => {
  try {
    const newImage = await db.one(
      'INSERT INTO images (mate_uid, profile_image) VALUES ($1, $2) RETURNING *',
      [image.mate_uid, image.profile_image],
    );
    return newImage;
  } catch (error) {
    return error;
  }
};

//Delete
const deleteImage = async (uid) => {
  try {
    const deletedImage = await db.one(
      'DELETE FROM images WHERE id=$1 RETURNING *',
      uid,
    );
    return deletedImage;
  } catch (error) {
    return error;
  }
};

//Update
const updateImage = async (uid, image) => {
  try {
    const updatedImage = await db.one(
      'UPDATE images SET profile_image=$1 WHERE uid=$2 RETURNING *',
      [image.Profile_Image, uid],
    );
    return updatedImage;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllImages,
  getImage,
  createImage,
  updateImage,
  deleteImage,
};