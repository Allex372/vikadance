import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import Navigation from "./components/Navigation/navigation";
import Books from "./components/Navigation/BooksComponenst/books";
import MainPage from "./components/Navigation/mainPage";

export default function App() {
    return (
        <div>
            <Router>
        <Switch>
            <Navigation/>
        </Switch>

                <Switch>
                    <Route path={'/'} component={MainPage}/>
                    <Route path={'/books'} component={Books}/>

                </Switch>
            </Router>
            </div>



    );
}
