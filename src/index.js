import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class WebSiteEntity {
    constructor(url, name, type) {
        this.url = url;
        this.name = name;
        this.type = type;
        this.icon = url + '/favicon.ico';
    }
}

let blockTypesData = [
    {id: 'lan', name: '编程语言'},
    {id: 'back', name: '后台开发'},
    {id: 'front', name: '前端开发'},
    {id: 'mobile', name: '移动开发'}
];

let websitesData = [
    new WebSiteEntity('https://www.baidu.com', '百度', 'lan'),
    new WebSiteEntity('https://github.com', 'github', 'lan')
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
    renderWebList() {
        return this.props.websites.map((website) => <Website website={website}/>);
    }

    render() {
        let webList = this.renderWebList();
        return (
            <div className="WebBlock">
                <div>{this.props.type.name}</div>
                <div className="WebList">{webList}</div>
            </div>

        )
    }
}

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            blockTypes: blockTypesData,
            websites: websitesData
        }
    }
    renderWebBlocks() {
        return this.state.blockTypes.map((type) =>
            <WebBlock
                type={type}
                websites={this.state.websites.filter((website) =>
                    website.type === type.id
                )
            }/>
        )
    }
    render() {
        let webBlocks = this.renderWebBlocks();
        return (
            <div className="App">
                <h1>Judy Map</h1>
                <div>{webBlocks}</div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
