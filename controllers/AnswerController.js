//Dependencies
const express = require('express');
const answer = express.Router({ mergeParams: true });
const {
  getAllAnswers,
  getAnswer,
  createAnswer,
  updateAnswer,
  deleteAnswer,
} = require('../queries/Answers');

//Index
answer.get('/', async (req, res) => {
  const { uid } = req.params;
  try {
    const allAnswers = await getAllAnswers(uid);
    res.status(200).json(allAnswers);
  } catch (error) {
    res.status(200).json({ error: 'server error' });
  }
});

//Show
answer.get('/:id', async (req, res) => {
  const { id } = req.params;
  const user = await getAnswer(id);
  if (user[0]) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ error: 'User Answers not found' });
  }
});

//Create
answer.post('/', async (req, res) => {
  try {
    const user = await createAnswer(req.body);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ error: 'User Answers were not created' });
  }
});

//Delete
answer.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedAnswer = await deleteAnswer(id);
    res.status(200).json(deletedAnswer);
  } catch (error) {
    res.status(404).json({ error: 'ID NOT FOUND' });
  }
});

//Update
answer.put('/', async (req, res) => {
  try {
    const { uid } = req.params;
    const updatedAnswer = await updateAnswer(uid, req.body);
    res.status(200).json(updatedAnswer);
  } catch (error) {
    res.status(404).json({ error: 'Failed to update answers' });
  }
});

//Export
module.exports = answer;
