import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';

class WebSiteEntity {
    constructor(url, name, type, icon) {
        this.url = url;
        this.name = name;
        this.type = type;
        this.icon = icon;
        if (!icon) {
            this.icon = url + '/favicon.ico';
        }
    }
}

let blockTypesData = [
    {id: 'lan', name: '编程语言'},
    {id: 'back', name: '后台开发'},
    {id: 'front', name: '前端开发'},
    {id: 'mobile', name: '移动开发'}
];

let websitesData = [
    new WebSiteEntity('http://www.cplusplus.com/', 'C++', 'lan'),
    new WebSiteEntity('https://www.java.com/', 'Java', 'lan'),
    new WebSiteEntity('https://www.python.org', 'Python', 'lan', 'http://img2.imgtn.bdimg.com/it/u=1883701644,1651591262&fm=26&gp=0.jpg'),
    new WebSiteEntity('http://www.php.net', 'PHP', 'lan'),
    new WebSiteEntity('https://docs.microsoft.com/zh-cn/dotnet/csharp/', 'C#', 'lan', 'http://img2.imgtn.bdimg.com/it/u=98901005,3154284573&fm=26&gp=0.jpg'),
    new WebSiteEntity('https://golang.org/', 'Go', 'lan'),
    new WebSiteEntity('http://www.ruby-lang.org/', 'Ruby', 'lan'),
    new WebSiteEntity('https://swift.org/', 'Swift', 'lan'),
    new WebSiteEntity('https://www.kotlincn.net/', 'Kotlin', 'lan'),
    new WebSiteEntity('https://www.scala-lang.org/', 'Scala', 'lan'),
    new WebSiteEntity('https://www.rust-lang.org/', 'Rust', 'lan'),
    new WebSiteEntity('https://www.haskell.org/', 'Haskell', 'lan', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543915034&di=247ed3b3a860a54a87df80d70ef2df78&imgtype=jpg&er=1&src=http%3A%2F%2Fp7.qhimg.com%2Ft010b055b595c67fca9.png'),
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
