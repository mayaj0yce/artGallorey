const sequelize = require('../config/connection');
const { Artist, Art } = require('../models');

const artistSeedData = require('./artistSeedData.json');
const artSeedData = require('./artSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const artists = await Artist.bulkCreate(artistSeedData);

  for (const { id } of artists) {
    const newArt = await Art.create({
      artist_id: id,
    });
  }

  for (const art of artSeedData) {
    const newArt = await Art.create({
      ...art,
      artist_id: artists[Math.floor(Math.random() * artists.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
