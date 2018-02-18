const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/omegak');

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('omegak has been activated');
})

//TODO: schema for pokemon profiles - need update props
let pokemonSchema = mongoose.Schema({
  id: {type: Number, unique: true},
  name: {type: String, unique: true},
  picture: String,
  type: String,
});

let Pokemon = mongoose.model('Pokemon', pokemonSchema);

let saveProfile = ({id, name, picture, type}) => {

  let pokemon = new Pokemon({
    id: id,
    name: name,
    picture: picture,
    type: type
  });

  pokemon.save(function(err, poke) {
    if (err) return console.error(err);
    console.log('saved profile to DB')
  });
}

//Schema for setting initiat pokemon - ID relationship
let pokemonIdSchema = mongoose.Schema({
  name: {type: String, unique: true},
  id: {type: Number, unique: true}
});

let ID = mongoose.model('ID', pokemonIdSchema);

let saveID = ({id, name}) => {

  let pokemonId = new ID({
    name: name,
    id: id
  })

  pokemonId.save(function(err, poke) {
    if (err) return console.error(err);
    console.log('Saved ID to DB')
  })
}

//TODO: change params | find pokemon
let findPokemonInDB = (param, callback) => {
  Pokemon.find(param, callback);
}

let findID = (param, callback) => {
  ID.find(param, callback);
}

module.exports.saveProfile = saveProfile;
module.exports.findPokemonInDB = findPokemonInDB;
module.exports.findID = findID
module.exports.saveID = saveID;