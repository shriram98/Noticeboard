import React from 'react'
import ReactDOM from 'react-dom'
import 'tachyons';

import {HashRouter} from 'react-router-dom'

import App from './app'

ReactDOM.render(
    <HashRouter>
        <App />
    </HashRouter>,
    document.getElementById('root')
)