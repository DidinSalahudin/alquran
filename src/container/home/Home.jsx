// Libraries
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// Pages
import Surah from '../Pages/Surah/Surah';
import Ayat from '../Pages/Ayat/Ayat';

// Style
// import './Home.css';


class Home extends Component {

    render() {
        return (
            <Router>
                
                <Fragment>
                    <Route path="/" exact component={ Surah } />
                    <Route path="/Ayat/:id" component={ Ayat } />
                </Fragment>
            </Router>
        )
    }
}

export default Home;