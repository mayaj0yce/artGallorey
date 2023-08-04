const Artist = require('./Arist');
const Artwork = require('./Artwork');

Artist.hasMany(Artwork, {
    foreignKey: 'artist_id',
    onDelete: 'CASCADE'
});

Artwork.belongsTo(Artist, {
    foreignKey: 'artist_id'
});

module.exports = { Artist, Project };