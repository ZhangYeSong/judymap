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
    {id: 'usual', name: '常用网站'},
    {id: 'lan', name: '编程语言'},
    {id: 'back', name: '后台开发'},
    {id: 'front', name: '前端开发'},
    {id: 'mobile', name: '移动开发'},
    {id: 'database', name: '数据库'},
    {id: 'design', name: '设计&&UI库'},
];

let websitesData = [
    //常用网站
    new WebSiteEntity('https://www.google.com/', 'Google', 'usual', '/img/google.png'),
    new WebSiteEntity('https://www.baidu.com/', '百度', 'usual', '/img/baidu.png'),
    new WebSiteEntity('https://stackoverflow.com/', 'StackOverflow', 'usual', '/img/stackoverflow.png'),
    new WebSiteEntity('https://github.com/', 'Github', 'usual', '/img/github.jpeg'),
    new WebSiteEntity('http://www.w3school.com.cn/', 'W3CSchool', 'usual', '/img/w3c.png'),
    new WebSiteEntity('https://leetcode-cn.com/', 'LeetCode', 'usual', '/img/leetcode.png'),

    //编程语言
    new WebSiteEntity('http://www.cplusplus.com/', 'C++', 'lan', '/img/c++.jpeg'),
    new WebSiteEntity('https://www.java.com/', 'Java', 'lan', '/img/java.png'),
    new WebSiteEntity('https://www.python.org', 'Python', 'lan', '/img/python.png'),
    new WebSiteEntity('http://www.php.net', 'PHP', 'lan', '/img/php.png'),
    new WebSiteEntity('https://docs.microsoft.com/zh-cn/dotnet/csharp/', 'C#', 'lan', '/img/csharp.png'),
    new WebSiteEntity('https://golang.org/', 'Go', 'lan', '/img/go.jpeg'),
    new WebSiteEntity('http://www.ruby-lang.org/', 'Ruby', 'lan', '/img/ruby.jpeg'),
    new WebSiteEntity('https://swift.org/', 'Swift', 'lan', '/img/swift.jpeg'),
    new WebSiteEntity('https://www.kotlincn.net/', 'Kotlin', 'lan', '/img/kotlin.jpeg'),
    new WebSiteEntity('https://www.w3schools.com/html/ ', 'HTML', 'lan', '/img/html.png'),
    new WebSiteEntity('https://www.w3schools.com/css/ ', 'CSS', 'lan', '/img/css.png'),
    new WebSiteEntity('https://www.javascript.com/ ', 'Javascript', 'lan', '/img/javascript.png'),
    new WebSiteEntity('http://www.typescriptlang.org/', 'TypeScript', 'lan', '/img/typescript.png'),
    new WebSiteEntity('https://www.scala-lang.org/', 'Scala', 'lan', '/img/scala.png'),
    new WebSiteEntity('https://www.rust-lang.org/', 'Rust', 'lan', '/img/rust.png'),
    new WebSiteEntity('https://www.dartlang.org/', 'Dart', 'lan', '/img/dart.png'),
    new WebSiteEntity('https://www.w3schools.com/sql/', 'SQL', 'lan', '/img/sql.png'),
    new WebSiteEntity('https://www.haskell.org/', 'Haskell', 'lan', '/img/haskell.png'),

    //后台开发
    new WebSiteEntity('http://spring.io/', 'Spring', 'back', '/img/spring.jpeg'),
    new WebSiteEntity('http://www.thinkphp.cn/', 'ThinkPHP', 'back', '/img/thinkphp.png'),
    new WebSiteEntity('https://iris-go.com/', 'Iris', 'back', '/img/iris.png'),
    new WebSiteEntity('https://nodejs.org/zh-cn/', 'Node.js', 'back', '/img/nodejs.png'),
    new WebSiteEntity('https://expressjs.com/', 'Express', 'back', '/img/express.png'),
    new WebSiteEntity('https://koajs.com/', 'Koa', 'back', '/img/koa.png'),
    new WebSiteEntity('https://www.djangoproject.com/', 'Django', 'back', '/img/django.jpeg'),
    new WebSiteEntity('http://flask.pocoo.org/', 'Flask', 'back', '/img/flask.png'),
    new WebSiteEntity('https://www.playframework.com/', 'PlayFramework', 'back', '/img/playframework.png'),
    new WebSiteEntity('https://zh-cn.wordpress.com/', 'WordPress', 'back', '/img/wordpress.png'),
    new WebSiteEntity('https://hadoop.apache.org/', 'Hadoop', 'back', '/img/hadoop.png'),
    new WebSiteEntity('https://spark.apache.org/', 'Spark', 'back', '/img/spark.png'),
    new WebSiteEntity('https://akka.io/', 'Akka', 'back', '/img/akka.png'),
    new WebSiteEntity('https://jwt.io/', 'Json Web Token', 'back', '/img/jwt.png'),

    //前端开发
    new WebSiteEntity('https://reactjs.org/', 'React', 'front', '/img/react.png'),
    new WebSiteEntity('https://cn.vuejs.org/index.html', 'Vue', 'front', '/img/vue.jpeg'),
    new WebSiteEntity('https://angular.io/', 'Angular', 'front', '/img/angular.png'),
    new WebSiteEntity('https://jquery.com/', 'JQuery', 'front', '/img/jquery.png'),
    new WebSiteEntity('https://getbootstrap.com/', 'Bootstrap', 'front', '/img/bootstrap.png'),
    new WebSiteEntity('https://webpack.js.org/', 'Webpack', 'front', '/img/webpack.jpeg'),
    new WebSiteEntity('https://sass-lang.com/', 'Sass', 'front', '/img/sass.png'),
    new WebSiteEntity('https://redux.js.org/', 'Redux', 'front', '/img/redux.png'),
    new WebSiteEntity('https://cn.rx.js.org/', 'RxJs', 'front', '/img/rxjs.jpeg'),
    new WebSiteEntity('https://developers.google.com/web/progressive-web-apps/', 'PWA', 'front', '/img/pwa.jpeg'),
    new WebSiteEntity('https://electronjs.org/', 'Electron.js', 'front', '/img/electron.png'),

    //移动开发
    new WebSiteEntity('https://developer.apple.com/ios/', 'ios', 'mobile', '/img/ios.jpeg'),
    new WebSiteEntity('https://developer.android.com/', 'Android', 'mobile', '/img/android.png'),
    new WebSiteEntity('https://facebook.github.io/react-native/', 'React Native', 'mobile', '/img/reactnative.png'),
    new WebSiteEntity('https://ionicframework.com/', 'ionic', 'mobile', '/img/ionic.png'),
    new WebSiteEntity('https://flutter.io/', 'Flutter', 'mobile', '/img/flutter.png'),

    //数据库
    new WebSiteEntity('https://www.mysql.com/cn/', 'MySQL', 'database', '/img/mysql.png'),
    new WebSiteEntity('https://www.oracle.com/database/', 'Oracle', 'database', '/img/oracle.jpeg'),
    new WebSiteEntity('https://www.mongodb.com/cn', 'MongoDB', 'database', '/img/mongodb.png'),
    new WebSiteEntity('http://slick.lightbend.com/', 'Slick', 'database', '/img/slick.jpg'),
    new WebSiteEntity('https://www.sqlite.org/', 'SQLite', 'database', '/img/sqlite.png'),

    //设计&&UI组件库
    new WebSiteEntity('https://ant.design/', 'Ant-Design', 'design', '/img/antdesign.jpeg'),
    new WebSiteEntity('https://developer.apple.com/design/', 'Apple-Design', 'design', '/img/appledesign.jpeg'),
    new WebSiteEntity('https://material.io/design/', 'Material', 'design', '/img/material.png'),
    new WebSiteEntity('https://lanhuapp.com/', '蓝湖', 'design', '/img/lanhu.png'),
    new WebSiteEntity('https://www.photoshop.com/', 'PhotoShop', 'design', '/img/photoshop.png'),
    new WebSiteEntity('https://www.sketchapp.com/', 'Sketch', 'design', '/img/sketch.jpeg'),
    new WebSiteEntity('http://www.iconfont.cn/', '阿里矢量图库', 'design', '/img/alisvg.png'),
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
                <div className="BlockTitle">{this.props.type.name}</div>
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
                <div className="WebBlocks">{webBlocks}</div>
            </div>
        )
    }
}

ReactDOM.render(<App />, document.getElementById('root'));
serviceWorker.register();
