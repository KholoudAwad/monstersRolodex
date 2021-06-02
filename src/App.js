import React , {Component} from 'react';
import './App.css';
import {CardList} from './Components/card-list/card-list.component'
import {SearchBox} from './Components/searchBox/search-box.component'

class App extends Component {

constructor(){
  super();
  this.state={
   monsters:[],
   searchField:''
  };
}


  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({monsters:users}));
  }


  render(){
    const {monsters , searchField} =this.state;
    const filteredMonsters = monsters.filter( monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));


    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox 
         placeholder="Search monster" 
         handleChange={e => this.setState({searchField:e.target.value})}
        />
        <CardList monsters={filteredMonsters} > </CardList>
      </div>
    );
  }
}


/* <p>
        {this.state.string}
        </p>
       <button onClick={()=>this.setState({string:'Helloooo Again'})}>Change text</button> */
/* function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn....
        </a>
      </header>
    </div>
  );
} */

export default App;
