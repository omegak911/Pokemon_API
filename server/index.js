const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const db = require('../db/index');  //db.save   db.find
const pokemonRequest = require('./apiHelpers');

let port = 3060;
let app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(path.join(__dirname, '../client/dist')));

//get request for all on load

//get request for specific ones
app.get('/pokemon', (req, res) => {
  //need to pass find parameter
  console.log('GET request received: ', req.url)
  var requestedPokemon = req.url.split('=')[1];
  db.findPokemonInDB({name: requestedPokemon}, function(err, results) {
    res.status(200).send(results);
  })
})

app.get('/pokemon/all', (req, res) => {
  //need to pass find parameter
  console.log('GET request received for ALl: ', req.url)
  db.findPokemonInDB({}, function(err, results) {
    res.status(200).send(results);
  })
})

app.post('/pokemon', (req, res) => {

  db.findPokemonInDB(req.body, function(err, results) {
    if (results.length > 0) {  //if in DB, send, else, go to POkemon API
      res.status(201).send('Send GET request');
    } else {
      pokemonRequest(req.body, function(result) {
        result = JSON.parse(result);

        var wrapPokemon = {
          id: result.id,
          name: req.body.name,
          picture: result.sprites.front_default,
          type: result.types[0].type.name
        }

        db.saveProfile(wrapPokemon);
        res.status(201).send('POST received, now send GET request');
      })
    }
  })
})

//TODO: app.get

//TODO: app.post

//TODO: app.get /*


//TODO: router to controller/helper

app.listen(port, function() {
  console.log('Server is listening on port: ', port);
})