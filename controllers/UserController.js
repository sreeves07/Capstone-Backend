//Dependencies
const express = require('express');
const user = express.Router();
const {
  getAllUser,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} = require('../queries/User');

//Index
user.get('/', async (req, res) => {
  const allUser = await getAllUser();
  if (allUser[0]) {
    res.status(200).json(allUser);
  } else {
    res.status(404).json({ error: 'server error' });
  }
});

//Show
user.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await getUser(id);
  if (user[0]) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

//Create
user.post('/', async (req, res) => {
  try {
    const user = await createUser(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: 'User was not created' });
  }
});

//Delete
user.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUser(id);
    res.status(200).json({ deletedUser });
  } catch (error) {
    res.status(404).json({ error: 'ID NOT FOUND' });
  }
});

//Update
user.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedUser = await updateUser(id, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(404).json({ error: 'Failed to update user' });
  }
});

//Export
module.exports = user;
