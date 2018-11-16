import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class App extends React.Component {
    render() {
        return <h1>Judy Map</h1>
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
