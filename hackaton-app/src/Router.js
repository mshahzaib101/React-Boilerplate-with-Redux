import React from 'react';
import HomePage from './components/Home';
import {Route,Router, Link} from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'; //for changing routes with a function


const CustomHistory = createBrowserHistory();
//for changing routes with a function
const CustomRoutes = () => {
    return(
        <Router history={CustomHistory}>
            <div>
                <Route exact path='/' component={HomePage} />
                {/* <Route path='/' component={} />
                <Route path='/' component={} />
                <Route path='/' component={} /> */}

            </div>
        </Router>
    )
}

// HOW TO CHANGE NAVIGATION
// we us Link
// <Link to='/'>Home</Link>
// <Link to='home'>Home</Link>
// but import from 'react-router-dom';

// HOW TO CHANGE ROUTE WITH A Function
// onclick
// if user enters correct password and you want to change route than 
// in onclick function
// this.props.history.push('/');
// this.props.history.push('home');


export default CustomRoutes;