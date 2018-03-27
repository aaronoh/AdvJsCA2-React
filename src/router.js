import React from 'react'
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Link} from 'react-router-dom';

class Home extends React.Component {
    render() {
        return(
            <div>
                <h2>Home</h2>
            </div>
        );
    }
}

class About extends React.Component {
    render() {
        return(
            <div>
                <h2>About</h2>
            </div>
        );
    }
}

class Contact extends React.Component {
    render() {
        return(
            <div>
                <h2>Contact Us</h2>
            </div>
        );
    }
}

class BasicExample extends React.Component {
    render() {
        return(
            <BrowserRouter>
                <div>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>
                        <li><Link to="/test">Test Link</Link></li>

                    </ul>

                    <hr/>

                    {/* The exact keyword ensures the '/' route matches only '/' and not '/anything-else'--> */}
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contact" component={Contact}/>
                </div>
            </BrowserRouter>
        );
    }
}

ReactDOM.render(
    <BasicExample />,
    document.getElementById('root')
);