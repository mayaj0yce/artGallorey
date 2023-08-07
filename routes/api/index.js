const router = require('express').Router();
const artistRoutes = require('./artistRoutes');
const artRoutes = require('./artRoutes');
//calling routes from api and express

router.use('/artists', artistRoutes);
router.use('/art', artRoutes);


module.exports = router;
