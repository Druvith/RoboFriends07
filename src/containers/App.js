import React, { Component } from 'react';
import Carlist from '../components/Cesar'
import {robots} from '../robots'
import SearchBox from '../components/SearchBox';
import './App.css'
import Scroll from '../components/scroll'



class App extends Component {
    constructor() {
        super()
        this.state = {
            robots : [],
            searchfield : ''

        }
    }

    componentDidMount(){
        fetch('https://jsonplaceholder.cypress.io/')
        .then(response => {
            response.json();
        })
        .then(json => {
            this.setState({ robots: robots})   
        })
        this.setState({ robots: robots});
    }


    onSearchChange = (event) => {
        this.setState({ searchfield: event.target.value})
        console.log(event.target.value);
        
    }
    render() {
        const { robots, searchfield } = this.state;
        const filteredRobots = robots.filter(robot => {
            return robot.name.toLowerCase().includes(searchfield.toLowerCase());
            console.log(filteredRobots)
        })
            return !robots.length ?
            <h1>Loading </h1> :
    
            (
                <div class = 'tc'>
                    <h1 className = 'f2' >RoboFriends</h1>
                    <SearchBox searchChange = {this.onSearchChange}/>
                    <Scroll>
                        <Carlist robots = {filteredRobots} />
                    </Scroll>    
                </div>            
        );

    }
    
}

export default App