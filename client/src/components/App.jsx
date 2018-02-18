import React from 'react';
import axios from 'axios';
import PokemonProfile from './PokemonProfile';
import Search from './Search';
import PokemonSearchHistory from './PokemonSearchHistory';

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      pokeList: [],
      showPokemon: '',
      currentPokemon: {name: 'See Above', id: 0, type: 'Potato', picture: 'http://cdn.playbuzz.com/cdn/UserImages/57ffa0c0-7789-4fef-817e-f3abdefda63f.jpg'},
    }

    this.changeShowPokemonVal = this.changeShowPokemonVal.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
    this.requestFromServer = this.requestFromServer.bind(this);
    this.displayPokemon = this.displayPokemon.bind(this);
    this.getRequest = this.getRequest.bind(this);
  }

  changeShowPokemonVal(e) {
    if (e.target) {
      this.setState({showPokemon: e.target.value});
    } else {
      this.setState({currentPokemon: e});
    } 
  }

  componentDidMount() {
    console.log('ComponentDidMount activated!')
    this.getRequest(null, '/pokemon/all');
  }

  requestFromServer() {
    var requestedPokemon = this.state.showPokemon;
    requestedPokemon = requestedPokemon.toLowerCase();
    //invoke fetching pokemon gif
    var catching = {
      name: 'TRAINERS ARE CATCHING ' + requestedPokemon.toUpperCase(),
      id: '??????',
      type: '??????',
      picture: 'https://media.giphy.com/media/W04QVzelTHsNW/giphy.gif'
    }

    this.setState({currentPokemon: catching})

    axios.post('/pokemon', {name: requestedPokemon})
      .then( () => {
        console.log('POST success!');
        var query = { params: {name: requestedPokemon}};
        this.getRequest(query);
      })
      .catch( error => {
        console.log('FAILED POST: ', error)
      })
  }

  getRequest(query, url = '/pokemon') {
    axios.get(url, query)
      .then( ({data}) => {
        console.log('GET success!', data)
        this.setState({pokeList: [...this.state.pokeList, ...data], currentPokemon: data[0]})
      })
      .catch( err => {
        console.log('GET error', err);
      })
  }

  displayPokemon() {
    var pokeList = this.state.pokeList;
    var currentPokemon = this.state.showPokemon;
    currentPokemon = currentPokemon.toLowerCase();

    let checkPokeList = pokeList.filter( pokemon => pokemon.name === currentPokemon);

    if (checkPokeList.length > 0) {
      console.log('we have it')
      //setSTate of pokemon from list
      this.setState({currentPokemon: checkPokeList[0]});
      // this.setState
    } else {
      this.requestFromServer();
      console.log('request from server')
    }
    //setStateof showpokemon to ''
    this.setState({showPokemon: ''});
  }

  render() {
    let {currentPokemon, showPokemon, pokeList} = this.state;

    return (
      <div className="main">
        <h2>Gotta Catch 'em All</h2>
        <div>
          <PokemonProfile currentPokemon={currentPokemon}/>
        </div>
        <br/>
        <div>
          <Search 
          changeShowPokemonVal={this.changeShowPokemonVal}
          displayPokemon={this.displayPokemon}
          showPokemon={showPokemon}/>
        </div>
        <br/>
        <div className="searchHist">
          <PokemonSearchHistory changeShowPokemonVal={this.changeShowPokemonVal} pokeList={pokeList}/>
        </div>
      </div>
    )
  }
}

export default App;