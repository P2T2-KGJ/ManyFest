const router = require('express').Router();
const { Collection, Item } = require('../../models');

// from kit: I think these first two actually need to be on a page route
// api routes for this project will be creation/edit/deletion
// get routes should all be for page rendering

router.get('/', async (req, res) => {
    // find all collections
    // including all associated items
    try {
      const collectionData = await Collection.findAll({
        // include: [{ model: Item }]
      });
      res.status(200).json(collectionData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/:id', async (req, res) => {
  // find one category by its `id` value
  // be sure to include its associated Products
  try {
    const collectionData = await Collection.findByPk(req.params.id, {
      include: [{ model: Item }]
    });
    
    if (!collectionData) {
      res.status(404).json({ message: 'No collection found with that id!' });
      return;
    }

    res.status(200).json(collectionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new category
  try {
    const collectionData = await Collection.create({
      name: req.body.name,
      description: req.body.description,
      public: req.body.public
    });
    res.status(200).json(collectionData);
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
    res.status(200).json(collectionData);
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
    res.status(200).json(collectionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
