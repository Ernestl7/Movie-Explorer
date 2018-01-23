import React from 'react';
import ReactDOM from 'react-dom';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import './index.css';
import App from './components/home/App';
import Apis from "./components/apis/apis";
import Lifecycle from "./components/lifecycle/lifecycle";

ReactDOM.render(
    <Router>
        <div>
            <Route exact path="/" component={App}/>
            <Route path="/lifecycle" component={Lifecycle}/>
            <Route path="/apis" component={Apis}/>
        </div>
    </Router>, document.getElementById('root'));
