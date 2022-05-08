const router = require('express').Router();
const { Collection, Item } = require('../../models');

// from kit: I think these first two actually need to be on a page route
// api routes for this project will be creation/edit/deletion
// get routes should all be for page rendering

router.post('/', async (req, res) => {
  // create a new category
  try {
    const collectionData = await Collection.create({
      name: req.body.name,
      description: req.body.description,
      public: req.body.public
    });
    res.status(201).json(collectionData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', async (req, res) => {
  // update a category by its `id` value
  try {
    const collectionData = await Collection.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    if (!collectionData[0]) {
      res.status(404).json({ message: 'No collection with this id!' });
      return;
    }
    res.status(201).json(collectionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a category by its `id` value
  try {
    const collectionData = await Collection.destroy({
      where: {
        id: req.params.id,
      },
    });
    if (!collectionData) {
      res.status(404).json({ message: 'No collection with this id!' });
      return;
    }
    res.status(201).json(collectionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
