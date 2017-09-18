import React, {Component} from 'react'
import ReactDOM, { render } from 'react-dom'
import { Router, Route, Link, browserHistory} from 'react-router'
// import {HashRouter as Router, Route, Link} from 'react-router-dom'

import './index.css'

class App extends Component {
    render(){
         
        return (
            <div className='container'>
                <div>
                    <ul>
                        <li><Link to="/" >首页</Link></li>
                        <li><Link to="/tv">TV</Link></li>
                    </ul>
                </div>
                {this.props.children || "welcome to react-router 3.0"}
            </div>
        )
    }
}

class TV extends Component {
    render(){

        return (
            <div>
                <div>电视节目列表</div>
                {this.props.cheldren || "节目列表项"}
            </div>
        );
    }
}

class Show extends Component {
    render(){

        return (
            <div>
                <h2>节目</h2>
            </div>
        );
    }
}

const myRouter = (
        <Router history={browserHistory}>
            <Route path="/" component = {App}>
                <Route path="tv" component = {TV} >
                    <Route path="shows/:id" component = {Show}>
                        
                    </Route>
                </Route>
            </Route>
        </Router>
    )

render( myRouter, 

    document.getElementById('app')
)
