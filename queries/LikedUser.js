const db = require('../db/Confiq');

//Index
const getAllLikedUsers = async (mate_uid) => {
  try {
    const allLikes = await db.any(
      'SELECT * FROM liked_user WHERE mate_uid=$1',
      mate_uid,
    );
    return allLikes;
  } catch (error) {
    return error;
  }
};

//Show
const getLikedUser = async (id) => {
  try {
    const oneLike = await db.any('SELECT * FROM liked_user WHERE id=$1', id);
    return oneLike;
  } catch (error) {
    return { error: 'ID NOT FOUND' };
  }
};

//Create
const createLikedUser = async (likedUser) => {
  try {
    const newLike = await db.one(
      'INSERT INTO liked_user (mate_uid, liked_mate_uid) VALUES ($1, $2) RETURNING *',
      [likedUser.mate_uid, likedUser.liked_mate_uid],
    );
    return newLike;
  } catch (error) {
    return error;
  }
};

//Delete
const deleteLikedUser = async (id) => {
  try {
    const deletedLikedUser = await db.one(
      'DELETE FROM liked_user WHERE id=$1 RETURNING *',
      id,
    );
    return deletedLikedUser;
  } catch (error) {
    return error;
  }
};

//Update
const updateLikedUser = async (id, likedUser) => {
  try {
    const updatedLikedUser = await db.one(
      'UPDATE liked_user SET mateId_liked_user=$1 WHERE id=$2 RETURNING *',
      [likedUser.mateId_liked_user, id],
    );
    return updatedLikedUser;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllLikedUsers,
  getLikedUser,
  createLikedUser,
  updateLikedUser,
  deleteLikedUser,
};
