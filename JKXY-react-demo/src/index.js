import React, {Component} from 'react'
import ReactDOM, { render } from 'react-dom'

import './index.css'

class App extends Component {
    render(){
         
        const name = 'react';
        const styles = {
            color: 'green',
            fontSize: '30px'
        };
        return (
            <div className='container'>
                <h2>name is: { name } </h2>

                <div style={styles}>
                    <h2>name is: { name } </h2>
                </div>
            </div>
        )
    }
}

render(<App />, document.getElementById('app'))
