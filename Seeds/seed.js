const sequelize = require('../config/connection');
const { Artist, Art } = require('../models');

const artistData = require('./artistSeedData');
const artData = require('./artSeedData');


const seedDatabase = async () => {
  await sequelize.sync({ force: true });

    await Artist.bulkCreate(artistData);

    // for (const { id } of artist) {
    //   const newArt = await Art.create({
    //     artist_id: id,
    //   });
    // }
    await Art.bulkCreate(artData);
  process.exit(0);
};


seedDatabase();

