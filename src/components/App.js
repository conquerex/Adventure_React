import React, {Component} from 'react';
//var React = require('react'); 와 같음
import { hot } from 'react-hot-loader';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: ''
        }
    }

    render(){
        var cnt = 0;
        return (
            <div>
                <button onClick={()=> {this.setState({name: 'Blah Blah'});}}>
                    Click!!
                </button>
                <h1>Hello React Skeleton :::: {this.state.name}</h1>
            </div>
        );
    }
}
 
export default hot(module)(App);
//module.export = App; 과 같음