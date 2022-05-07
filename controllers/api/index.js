const router = require('express').Router();
const userRoutes = require('./userRoutes');
const collectionRoutes = require('./collectionRoutes')
const itemRoutes = require('./itemRoutes')
const imageRoutes = require('./imageRoutes')

router.use('/users', userRoutes);
router.use('/collections', collectionRoutes);
router.use('/items', itemRoutes);
router.use('/images', imageRoutes)

module.exports = router;