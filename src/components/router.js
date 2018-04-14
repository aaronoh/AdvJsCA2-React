import React from 'react'
import {BrowserRouter, Route, Link} from 'react-router-dom';

class Home extends React.Component {
    render() {
        return(
            <div className='container'>
                <h2>Dublin Bikes Live Availability</h2>
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
                <p>Simply type the station name below to begin searching. You can use the sort option to sort the results alphabetically or the slider to only show stations with at least a specific number of bikes available. Click on the map icon to view your station on a map. The payment card indicates the availability of payments services at each individual station.</p>
            <br/><br/>
            </div>
        );
    }
}

class Contact extends React.Component {
    render() {
        return(
            <div className='container'>
                <h2>Contact</h2>
            <div className='row'>
                <div className='col lg6 offset-l3'style={{'border-radius':'5px','padding-top':'15px','background-color': '#ecf0f1'}}>
                <div className='col lg2  row'>
                    <div className = 'col lg1'>
                        <i class="material-icons">person</i>
                    </div>
                    <div className='col lg3'>
                        <span>Aaron O'Hare</span>
                    </div>
                 </div>
                <div className='col lg2'>
                    <div className = 'col lg1'>
                        <i class="material-icons">email</i>
                    </div>
                    <div className='col lg3'>
                        <span>aaron.ohare@outlook.com</span>
                    </div>
                </div>

                <div className='col lg2'>
                    <div className = 'col lg1'>
                        <i class="material-icons">code</i>
                    </div>
                    <div className='col lg3'>
                        <a href="https://github.com/aaronoh/AdvJsCA2-React" target="_blank">GitHub</a>
                    </div>
                </div>
                </div>
            </div>
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
                            <a className=" nav_logo brand-logo"><i className="large material-icons">directions_bike</i>DublinBikes React</a>

                            <ul id="nav-mobile" className="right hide-on-med-and-down">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/contact">Contact</Link></li>
                            </ul>
                        </div>
                    </nav>
                    {/* The exact keyword ensures the '/' route matches only '/' and not '/anything-else'--> */}
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </BrowserRouter>
        );
    }
}

export default Nav;