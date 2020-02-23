import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import App2 from './App2.jsx';
import App3 from './App3.jsx';

// ReactDOM.render(<App1/>, document.getElementById('app'));
// ReactDOM.render(<App2 headerprop22 = "header by props11...." contentprop = "content by prop11..."/>, document.getElementById('app'));
ReactDOM.render(<App3/>, document.getElementById('app'));

setTimeout(() => {
    ReactDOM.unmountComponentAtNode(document.getElementById('app'));
}, 10000);


