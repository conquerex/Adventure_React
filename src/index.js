import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

console.log('* * * * * before show root');
const rootElement = document.getElementById('root');
console.log('* * * * * after show root');
ReactDOM.render(<App/>, rootElement);