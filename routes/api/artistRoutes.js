const router = require('express').Router();
const { Artist, Art } = require('../../models')

//GET all artist
router.get('/', async (req, res) => {
    try {
        const artistData = await
            Artist.findAll({
            });
        res.status(200).json
            (artistData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//GET one artist

router.get('/:id', async (req, res) => {
    try {
        const artistData = await Artist.findByPk(req.params.id, {
        });

        if (!artistData) {
            res.status(404).json({ message: 'invalid artist request' });
            return;
        }

        res.status(200).json(artistData);
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;
