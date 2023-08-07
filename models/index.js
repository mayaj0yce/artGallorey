const Artist = require('./Artist');
const Art = require('./Art');

Artist.hasMany(Art, {
    foreignKey: 'artist_id',
    onDelete: 'CASCADE',
});

Art.belongsTo(Artist, {
    foreignKey: 'artist_id'
});

module.exports = { Artist, Art };