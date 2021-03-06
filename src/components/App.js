import React, {Component} from 'react';
import CardList from './CardList';
import  {robots} from '../robots.js';
import SearchBox from './SearchBox.js';

class App extends Component {
    constructor() {
        super();
        this.state = {
            robots,
            searchfield: '',
        }
    }
    
    onSearchChange = (event) => {
        this.setState({searchfield: event.target.value});
    }

    render(){
        const filteredRobots = this.state.robots.filter (robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
        })
        return (
            <div className='tc'>  
                <h1>Robo Friends</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <CardList robots ={filteredRobots} />
            </div >
        );
    }
    
}

export default App;