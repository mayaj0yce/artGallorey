//artist  routes. 
const router = require('express').Router();

const { Artist, Art } = require('../../models')

//GET all artist

router.get('/artist', async (req, res) => {
    try {
        const ArtistData = await
            Artist.findAll({
                include: [{
                    model: Art,
                    attributes: ['name', 'description'],
                }],
            });


        res.status(200).json
            (ArtistData);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
});


//GET one artist

router.get('/artist/:id', async (req, res) => {
    try {
        const artistData = await Artist.findByPk(req.params.id, {
            include: [
                {
                    model: Artist,
                    attributes: [
                        'id',
                    ],
                },
            ],
        });
    } catch (err) {
        res.status(500).json(err);
    }
});
module.exports = router;
