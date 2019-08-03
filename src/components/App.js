import React, {Component} from 'react';
import CardList from './CardList';
import  {robots} from '../robots.js';
import SearchBox from './SearchBox.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots,
            searchField: ''
        }
    }
    
    render(){
        return (
            <div className='tc'>  
                <h1>Robo Friends</h1>
                <SearchBox />
                <CardList robots ={this.state.robots} />
            </div >
        );
    }
    
}

export default App;