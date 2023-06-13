//Dependencies
const express = require('express');
const likedUser = express.Router({ mergeParams: true });
const {
  getAllLikedUsers,
  getLikedUser,
  createLikedUser,
  updateLikedUser,
  deleteLikedUser,
} = require('../queries/LikedUser');

//Index
likedUser.get('/', async (req, res) => {
  const { uid } = req.params;
  try {
    const allLikes = await getAllLikedUsers(uid);
    res.status(200).json(allLikes);
  } catch (error) {
    res.status(200).json({ error: 'server error' });
  }
});

//Show
likedUser.get('/:id', async (req, res) => {
  const { id } = req.params;
  const liked = await getLikedUser(id);
  if (liked[0]) {
    res.status(200).json(liked);
  } else {
    res.status(404).json({ error: 'Liked-User not found' });
  }
});

//Create
likedUser.post('/', async (req, res) => {
  try {
    const liked = await createLikedUser(req.body);
    res.status(200).json(liked);
  } catch (error) {
    res.status(404).json({ error: 'Liked-User were not created' });
  }
});

//Delete
likedUser.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedLikedUser = await deleteLikedUser(id);
    res.status(200).json(deletedLikedUser);
  } catch (error) {
    res.status(404).json({ error: 'ID NOT FOUND' });
  }
});

//Update
likedUser.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedLikedUser = await updateLikedUser(id, req.body);
    res.status(200).json(updatedLikedUser);
  } catch (error) {
    res.status(404).json({ error: 'Failed to update Liked-user' });
  }
});

//Export
module.exports = likedUser;
