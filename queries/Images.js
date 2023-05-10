const db = require('../db/Confiq');

//Index
const getAllImages = async (mate_id) => {
  try {
    const allImages = await db.any(
      'SELECT * FROM images WHERE mate_id=$1',
      mate_id,
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
      'INSERT INTO images (mate_id, Profile_Image) VALUES ($1, $2) RETURNING *',
      [image.mate_id, image.Profile_Image],
    );
    return newImage;
  } catch (error) {
    return error;
  }
};

//Delete
const deleteImage = async (id) => {
  try {
    const deletedImage = await db.one(
      'DELETE FROM images WHERE id=$1 RETURNING *',
      id,
    );
    return deletedImage;
  } catch (error) {
    return error;
  }
};

//Update
const updateImage = async (id, image) => {
  try {
    const updatedImage = await db.one(
      'UPDATE images SET Profile_Image=$1 WHERE id=$2 RETURNING *',
      [image.Profile_Image, id],
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
