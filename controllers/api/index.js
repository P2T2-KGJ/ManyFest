const router = require('express').Router();

const userRoutes = require('./userRoutes');
const collectionRoutes = require('./collectionRoutes')

router.use('/users', userRoutes);
router.use('/collections', collectionRoutes);

module.exports = router;