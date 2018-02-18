const request = require('request');

let pokemonRequest = ({name}, callback) => {
  let options = {
    method: 'GET',
    url: `http://pokeapi.co/api/v2/pokemon/${name}`
  }

  request(options, (err, res, body) => {
    if (err) console.log(err);
    callback(body);
  })

}

module.exports = pokemonRequest;


//only 300 requests per day
//create request to Pokemon API for info
//save only specific props to DB
//name, type, #, png, description