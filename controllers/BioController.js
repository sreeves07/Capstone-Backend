const express = require('express');
const bio = express.Router({ mergeParams: true });
const {
  getAllBios,
  getBio,
  createBio,
  updateBio,
  deleteBio,
} = require('../queries/Bio');

//Index
bio.get('/', async (req, res) => {
  const { uid } = req.params;
  try {
    const allBios = await getAllBios(uid);
    res.status(200).json(allBios);
  } catch (error) {
    res.status(200).json({ error: 'server error' });
  }
});

//Show
bio.get('/:id', async (req, res) => {
  const { id } = req.params;
  const bio = await getBio(id);
  if (bio[0]) {
    res.status(200).json(bio);
  } else {
    res.status(404).json({ error: 'User Bio not found' });
  }
});

//Create
bio.post('/', async (req, res) => {
  try {
    const bio = await createBio(req.body);
    res.status(200).json(bio);
  } catch (error) {
    res.status(404).json({ error: 'User Bio was not created' });
  }
});

//Delete
bio.delete('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBio = await deleteBio(id);
    res.status(200).json({ deletedBio });
  } catch (error) {
    res.status(404).json({ error: 'ID NOT FOUND' });
  }
});

//Update
bio.put('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedBio = await updateBio(id, req.body);
    res.status(200).json(updatedBio);
  } catch (error) {
    res.status(404).json({ error: 'Failed to update bio' });
  }
});

//Export
module.exports = bio;