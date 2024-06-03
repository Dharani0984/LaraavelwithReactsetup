require('./bootstrap');
require('./components/Example');

import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


import Example from './components/Example';


function App() {
    return (
        <div>
            <Example/>
        </div>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}

