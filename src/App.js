import React, {Component} from 'react';
import {CardList} from './component/card-list/card-list.component'
import {SearchBox} from './component/searchBox/searchBox.component'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super()
    this.state= {
      monsters: [],
      searchField: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {this.setState({monsters:users})}) //state di set mengambil data user dari json di url itu
  }

  //function handleChange
  handleChange = (e) => {
    this.setState({searchField: e.target.value})
  }

  render(){ //merender <CardList>, didalamnya ada <Card>
    //backend filter monster
    //toLowercase() = mengecek dengan tanpa case sensitive, includes() = mengecek/menampilkan monster sesuai dg string yg diketik di fieldSearc
    const {monsters, searchField} = this.state
    const filteredMonsters = monsters.filter(monsterIndv => monsterIndv.name.toLowerCase().includes(searchField.toLowerCase()))
    return (
      <div className='App'>
        <h1>Monstba</h1>
        {/* component SearchBox dengan handleChange jadi satu/nempel di component */}
        {/* <SearchBox placeholder='search monsters' handleChange={e => this.setState({searchField: e.target.value})}/> */}
        
        {/* component SearchBox setelah handleChange berdiri sendiri jadi function */}
        <SearchBox placeholder='search monsters' handleChange={this.handleChange}/>
        <CardList monsters={filteredMonsters}/> 
      </div>
    );
  }
}


export default App;
