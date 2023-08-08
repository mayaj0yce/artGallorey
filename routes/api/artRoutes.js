const router = require('express').Router();
const { Art } = require('../../models')

//get all art
router.get('/', async (req, res) => {
    try {
        const artData = await Art.findAll({
        });
        res.status(200).json(artData);
    } catch (err) {
        res.status(500).json(err);
    }
});

//get one art work
router.get('/:id', async (req, res) => {
    try {
        const artData = await Art.findByPk(req.params.id, {
        });
        res.status(200).json(artData);
    } catch (err) {
        res.status(500).json(err);
    }
});

// create art
router.post('/', async (req, res) => {
    try {
        const artData = await Art.create();
        res.status(200).json(artData);
    } catch (err) {
        res.status(500).json(err);
    }
});


//delete route
router.delete('/:id', async (req, res) => {
        const artData = await Art.destroy({
            where: {
                id: req.params.id,
            },
        });

        return res.json(artData);
    });


module.exports = router;