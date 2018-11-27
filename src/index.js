import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class WebSiteEntity {
    constructor(url, name) {
        this.url = url;
        this.name = name;
        this.icon = url + '/favicon.ico';
    }
}

let websites = [
    new WebSiteEntity('https://www.baidu.com', '百度'),
    new WebSiteEntity('https://github.com', 'github')
];

class Website extends React.Component {
    render() {
        return (
            <div className={'Website'}>
                <img src={this.props.website.icon} alt={''}/>
                <a href={this.props.website.url}>{this.props.website.name}</a>
            </div>
        );
    }
}

class WebBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            websites: props.websites
        }
    }

    renderWebList() {
        return this.state.websites.map((website) => <Website website={website}/>);
    }

    render() {
        let webList = this.renderWebList();
        return (
            <div className="WebBlock">{webList}</div>
        )
    }
}

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <h1>Judy Map</h1>
                <WebBlock websites={websites}/>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
