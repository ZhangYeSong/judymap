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
    {id: 'mobile', name: '移动开发'},
    {id: 'database', name: '数据库'},
    {id: 'design', name: '设计&&UI库'},
];

let websitesData = [
    //编程语言
    new WebSiteEntity('http://www.cplusplus.com/', 'C++', 'lan'),
    new WebSiteEntity('https://www.java.com/', 'Java', 'lan'),
    new WebSiteEntity('https://www.python.org', 'Python', 'lan', 'http://img2.imgtn.bdimg.com/it/u=1883701644,1651591262&fm=26&gp=0.jpg'),
    new WebSiteEntity('http://www.php.net', 'PHP', 'lan'),
    new WebSiteEntity('https://docs.microsoft.com/zh-cn/dotnet/csharp/', 'C#', 'lan', 'http://img2.imgtn.bdimg.com/it/u=98901005,3154284573&fm=26&gp=0.jpg'),
    new WebSiteEntity('https://golang.org/', 'Go', 'lan'),
    new WebSiteEntity('http://www.ruby-lang.org/', 'Ruby', 'lan'),
    new WebSiteEntity('https://swift.org/', 'Swift', 'lan'),
    new WebSiteEntity('https://www.kotlincn.net/', 'Kotlin', 'lan'),
    new WebSiteEntity('https://www.w3schools.com/html/ ', 'HTML', 'lan'),
    new WebSiteEntity('https://www.w3schools.com/css/ ', 'CSS', 'lan'),
    new WebSiteEntity('https://www.javascript.com/ ', 'Javascript', 'lan'),
    new WebSiteEntity('http://www.typescriptlang.org/', 'TypeScript', 'lan'),
    new WebSiteEntity('https://www.scala-lang.org/', 'Scala', 'lan'),
    new WebSiteEntity('https://www.rust-lang.org/', 'Rust', 'lan'),
    new WebSiteEntity('https://www.dartlang.org/', 'Dart', 'lan'),
    new WebSiteEntity('https://www.w3schools.com/sql/', 'SQL', 'lan'),
    new WebSiteEntity('https://www.haskell.org/', 'Haskell', 'lan', 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1543915034&di=247ed3b3a860a54a87df80d70ef2df78&imgtype=jpg&er=1&src=http%3A%2F%2Fp7.qhimg.com%2Ft010b055b595c67fca9.png'),

    //后台开发
    new WebSiteEntity('http://spring.io/', 'Spring', 'back'),
    new WebSiteEntity('http://www.thinkphp.cn/', 'ThinkPHP', 'back'),
    new WebSiteEntity('https://iris-go.com/', 'Iris', 'back'),
    new WebSiteEntity('https://nodejs.org/zh-cn/', 'Node.js', 'back'),
    new WebSiteEntity('https://www.express.com/', 'Express', 'back'),
    new WebSiteEntity('https://koajs.com/', 'Koa', 'back'),
    new WebSiteEntity('https://www.djangoproject.com/', 'Django', 'back'),
    new WebSiteEntity('http://flask.pocoo.org/', 'Flask', 'back'),
    new WebSiteEntity('https://www.playframework.com/', 'PlayFramework', 'back'),
    new WebSiteEntity('https://zh-cn.wordpress.com/', 'WordPress', 'back'),
    new WebSiteEntity('https://hadoop.apache.org/', 'Hadoop', 'back'),
    new WebSiteEntity('https://spark.apache.org/', 'Spark', 'back'),
    new WebSiteEntity('https://akka.io/', 'Akka', 'back'),

    //前端开发
    new WebSiteEntity('https://reactjs.org/', 'React', 'front'),
    new WebSiteEntity('https://cn.vuejs.org/index.html', 'Vue', 'front'),
    new WebSiteEntity('https://angular.io/', 'Angular', 'front'),
    new WebSiteEntity('https://jquery.com/', 'JQuery', 'front'),
    new WebSiteEntity('https://getbootstrap.com/', 'Bootstrap', 'front'),
    new WebSiteEntity('https://webpack.js.org/', 'Webpack', 'front'),
    new WebSiteEntity('https://sass-lang.com/', 'Sass', 'front'),
    new WebSiteEntity('https://redux.js.org/', 'Redux', 'front'),
    new WebSiteEntity('https://cn.rx.js.org/', 'RxJs', 'front'),
    new WebSiteEntity('https://developers.google.com/web/progressive-web-apps/', 'PWA', 'front'),
    new WebSiteEntity('https://electronjs.org/', 'Electron.js', 'front'),

    //移动开发
    new WebSiteEntity('https://developer.apple.com/ios/', 'ios', 'mobile'),
    new WebSiteEntity('https://developer.android.com/', 'Android', 'mobile'),
    new WebSiteEntity('https://facebook.github.io/react-native/', 'React Native', 'mobile'),
    new WebSiteEntity('https://ionicframework.com/', 'ionic', 'mobile'),
    new WebSiteEntity('https://flutter.io/', 'Flutter', 'mobile'),

    //数据库
    new WebSiteEntity('https://www.mysql.com/cn/', 'MySQL', 'database'),
    new WebSiteEntity('https://www.oracle.com/database/', 'Oracle', 'database'),
    new WebSiteEntity('https://www.mongodb.com/cn', 'MongoDB', 'database'),
    new WebSiteEntity('http://slick.lightbend.com/', 'Slick', 'database'),

    //设计&&UI组件库
    new WebSiteEntity('https://ant.design/', 'Ant-Design', 'design'),
    new WebSiteEntity('https://developer.apple.com/design/', 'Apple-Design', 'design'),
    new WebSiteEntity('https://material.io/design/', 'Material', 'design'),
    new WebSiteEntity('https://lanhuapp.com/', '蓝湖', 'design'),
    new WebSiteEntity('https://www.photoshop.com/', 'PhotoShop', 'design'),
    new WebSiteEntity('https://www.sketchapp.com/', 'Sketch', 'design'),
    new WebSiteEntity('http://www.iconfont.cn/', '阿里矢量图库', 'design'),
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
