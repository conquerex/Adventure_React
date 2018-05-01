import React, {Component} from 'react';
//var React = require('react'); 와 같음
import Contact from './Contact';

class App extends Component {
    constructor(props) {
        super(props);
        //
    }

    render(){
        return (
            <div>
                <Contact/>
            </div>
        );
    }
}
 
export default App;
//module.export = App; 과 같음