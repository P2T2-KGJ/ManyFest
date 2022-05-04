const router = require('express').Router();
const { User, Collection, Item } = require('../../models');

router.get('/', async (req, res) => {
    // find all collections
    // including all associated items
    try {
      const collectionData = await Collection.findAll({
        include: [{ model: Product }]
      });
      res.status(200).json(collectionData);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
