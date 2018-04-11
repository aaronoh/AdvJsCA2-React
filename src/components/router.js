import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom';

class Home extends React.Component {
    render() {
        return(
            <div className='container'>
                <h2>Home</h2>
                <p>Dublin Bikes Live Availability</p>
                <br/><br/>
            </div>
        );
    }
}

class About extends React.Component {
    render() {
        return(
            <div className='container'>
                <h2>About</h2>
                <p>Simply type the station name below to begin searching. Click on the map icon to view your station on a map.</p>
            <br/><br/>
            </div>
        );
    }
}


class Nav extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <nav>
                        <div className="nav-wrapper">
                            <a href="#" className="brand-logo"><i className="large material-icons">directions_bike</i></a>
                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                            </ul>
                        </div>
                    </nav>
                    {/* The exact keyword ensures the '/' route matches only '/' and not '/anything-else'--> */}
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default Nav;