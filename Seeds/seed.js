const sequelize = require('../config/connection');
const { Artist, Art } = require('../models');
// calls model data
const artistSeedData = require('./artistSeedData.json');
const artSeedData = require('./artSeedData.json');
// 
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const art = await Artist.bulkCreate(artistSeedData);

  for (const { artist } of art) {
    const newArt = await Art.create({
      art_id: id,
    });
  }

//   for (const art of artSeedData) {
//     const newArt = await Art.create({
//       ...art,
//       artist_id: artists[Math.floor(Math.random() * artists.length)].id,
//     });
//   }

  process.exit(0);
};

seedDatabase();
