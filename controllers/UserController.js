//Dependencies
const express = require('express');
const user = express.Router();
const {
  getAllUser,
  getUser,
  createUser,
  alterUser,
  updateUser,
  deleteUser,
  updateRegisteredUser,
  registerUser,
} = require('../queries/User');
const answersController = require('./AnswerController');
const likedUserController = require('./LikedUserController');
const imageController = require('./ImageController');
const bioController = require('./BioController')


user.use('/:uid/answers', answersController);
user.use('/:uid/likes', likedUserController);
user.use('/:uid/images', imageController);
user.use('/:uid/bios', bioController);

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
user.get('/:uid', async (req, res) => {
  const { uid } = req.params;
  const user = await getUser(uid);
  if (user[0]) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

//Create
user.put('/:uid', async (req, res) => {
  try {
    const { uid } = req.params;
    const user = await createUser(uid, req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: 'User was not created' });
  }
});



//Alter Prop
user.patch('/:uid', async (req, res) => {
  try {
    const { uid } = req/params;
    const alteredUser = await alterUser(uid, req.body);
    res.status(200).json(alteredUser);
  } catch (error) {
    res.status(400).json({error: 'User was not altered'})
  }
})

//Register
user.post('/register', async (req, res) => {
  try {
    const register = await registerUser(req.body)
    res.status(200).json(register)
  } catch (error) {
    res.status(404).json({error: 'User was not registered'})
  }
})

//Delete
user.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await deleteUser(id);
    res.status(200).json(deletedUser);
  } catch (error) {
    res.status(404).json({ error: 'ID NOT FOUND' });
  }
});

//Update Registered User
user.put('/register/:uid', async (req, res) => {
  try {
    const { uid } = req.params;
    const updatedUser = await updateRegisteredUser(uid, req.body);
    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(404).json({ error: 'Failed to update new user' });
  }
});

//Update
// user.put('/:id', async (req, res) => {
//   try {
//     const { id } = req.params;
//     const updatedUser = await updateUser(id, req.body);
//     res.status(200).json(updatedUser);
//   } catch (error) {
//     res.status(404).json({ error: 'Failed to update user' });
//   }
// });

//Export
module.exports = user;
