const router = require('express').Router();
const userRoutes = require('./userRoutes');
const collectionRoutes = require('./collectionRoutes')
const itemRoutes = require('./itemRoutes')

router.use('/users', userRoutes);
router.use('/collections', collectionRoutes);
router.use('/items', itemRoutes);

module.exports = router;