const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Art } = require('../../models/Art')

//get all art
router.get('/', async (req, res) => {
    try {
        const artData = await Art.findAll();
        res.status(200).json(artData);
    } catch (err) {
        res.status(500).json(err);
    }
})
// create art
router.post('/', async (req, res) => {
    try {
        const artData = await Art.findAll();
        res.status(200).json(artData);
    } catch (err) {
        res.status(500).json(err); 
    }
});



// router.post('/', async)
module.exports = router;