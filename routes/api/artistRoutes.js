//artist  routes. 
const router = require('express').Router();

const { Artist, Art } = require('../../models')

//GET all artist

router.get('/', async (req, res) => {
    try {
        const ArtistData = await
            Artist.findAll({
            });
        res.status(200).json
            (ArtistData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//GET one artist

router.get('/:id', async (req, res) => {
    try {
        const artistData = await Artist.findByPk(req.params.id, {
            include: [{ model: Art }],
        });

        if (!ArtistData) {
            res.status(404).json({ message: 'invalid artist request' });
            return;
        }

        res.status(200).json(ArtistData);
    } catch (err) {
        res.status(500).json(err);
    }
});
router.post('/', async (req, res) => {
    try {
        const artData = await Art.create();
        res.status(200).json(artData);
    } catch (err) {
        res.status(500).json(err); 
    }
});

router.delete('/', async (req, res) => {
    try {
        const artData = await Art.destroy({
            where: {
                title: req.params,
            },
        });
        if (!artData) {
            res.status(404).json({ message: 'No art found' });
            return;
          }
          res.status(200).json(artData);
        } catch (err) {
          res.status(500).json(err);
        }
      });
module.exports = router;
