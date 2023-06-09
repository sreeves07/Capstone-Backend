const express = require('express');
const image = express.Router({ mergeParams: true });
const {
  getAllImages,
  getImage,
  createImage,
  updateImage,
  deleteImage,
} = require('../queries/Images');

//Index
image.get('/', async (req, res) => {
  const { uid } = req.params;
  try {
    const allImages = await getAllImages(uid);
    res.status(200).json(allImages);
  } catch (error) {
    res.status(200).json({ error: 'server error' });
  }
});

//Show
image.get('/:id', async (req, res) => {
  const { id } = req.params;
  const image = await getImage(id);
  if (image[0]) {
    res.status(200).json(image);
  } else {
    res.status(404).json({ error: 'User Image not found' });
  }
});

//Create
image.post('/', async (req, res) => {
  try {
    const image = await createImage(req.body);
    res.status(200).json(image);
  } catch (error) {
    res.status(404).json({ error: 'User Image were not created' });
  }
});

//Delete
image.delete('/:uid', async (req, res) => {
  try {
    const { id } = req.params;
    const deletedImage = await deleteImage(id);
    res.status(200).json({ deletedImage });
  } catch (error) {
    res.status(404).json({ error: 'ID NOT FOUND' });
  }
});

//Update
image.put('/:uid', async (req, res) => {
  try {
    const { id } = req.params;
    const updatedImage = await updateImage(id, req.body);
    res.status(200).json(updatedImage);
  } catch (error) {
    res.status(404).json({ error: 'Failed to update image' });
  }
});

//Export
module.exports = image;