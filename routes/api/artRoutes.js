const router = require('express').Router();
const { Art } = require('../../models/Art')

//get all art
router.get('/', async (req, res) => {
    try {
        const artData = await Art.findAll({
            include: [
                {
                    model: Art, 
                }
            ]
        }

        );
        res.status(200).json(artData);
    } catch (err) {
        res.status(500).json(err);
    }
})
// create art
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
                title: req.params.title,
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

// router.post('/', async)
module.exports = router;