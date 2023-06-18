const db = require("../db/Confiq");

//Index
const getAllLikedUsers = async (mate_uid) => {
  try {
    const allLikes = await db.any(
      "SELECT * FROM liked_user WHERE mate_uid=$1",
      mate_uid
    );
    return allLikes;
  } catch (error) {
    return error;
  }
};

//Show
const getLikedUser = async (mate_uid) => {
  try {
    const oneLike = await db.any("SELECT * FROM liked_user WHERE uid=$1", id);
    return oneLike;
  } catch (error) {
    return { error: "ID NOT FOUND" };
  }
};

//Create
const createLikedUser = async (likedUser) => {
  try {
    const newLike = await db.one(
      "INSERT INTO liked_user (mate_uid, liked_mate_uid) VALUES ($1, $2) RETURNING *",
      [likedUser.mate_uid, likedUser.liked_mate_uid]
    );
    return newLike;
  } catch (error) {
    return error;
  }
};

//Delete
const deleteLikedUser = async (liked_mate_uid) => {
  try {
    const deletedLikedUser = await db.one(
      "DELETE FROM liked_user WHERE liked_mate_uid=$1 RETURNING *",
      liked_mate_uid
    );
    return deletedLikedUser;
  } catch (error) {
    return error;
  }
};

//Update
const updateLikedUser = async (uid, likedUser) => {
  try {
    const updatedLikedUser = await db.one(
      "UPDATE liked_user SET mate_Id_liked_user=$1 WHERE id=$2 RETURNING *",
      [likedUser.mateId_liked_user, id]
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
