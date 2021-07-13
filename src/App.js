import React, { Component } from 'react';
import Carlist from '../components/Cesar'
import {robots} from './robots'
import SearchBox from '../components/SearchBox.js';
import '../containers/App.css'
import Scroll from '../components/scroll.js'



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
        const filteredRobots = this.state.robots.filter(robot => {
            return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
            console.log(filteredRobots)
        })
        if (this.state.robots.length === 0){
            return <h1>Loading...</h1>
        }else {
        return (
            <div class = 'tc'>
                <h1 className = 'f2' >RoboFriends</h1>
                <SearchBox searchChange = {this.onSearchChange}/>
                <scroll>
                    <Carlist robots = {filteredRobots} />
                </scroll>    
            </div>            
        )
        }

    }
    
}

export default App