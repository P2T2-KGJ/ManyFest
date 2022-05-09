const router = require('express').Router();
const { Collection, Item } = require('../../models');
const {withAuth, userAuth} = require("../../utils/auth");

// create a new category
router.post('/', withAuth, async (req, res) => {
  try {
    const collectionData = await Collection.create({
      name: req.body.name,
      description: req.body.description,
      public: req.body.private,
      user_id: req.body.userId
    });
    res.status(201).json(collectionData);
  } catch (err) {
    res.status(400).json(err);
  }
});

// needs verification that the category belongs to the user
router.put('/:id', withAuth, async (req, res) => {
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

// needs verification that the category belongs to the user
router.delete('/:id', withAuth, async (req, res) => {
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
