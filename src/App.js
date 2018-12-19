import React, {Component} from 'react';
import {render} from 'react-dom';
import logo from './logo.svg';

import './App.css';

class App extends Component {
    render() {
        var place = "RED!!";
        return (
            <h1>Hello World {place}</h1>
        );
    }
}

export default App;
