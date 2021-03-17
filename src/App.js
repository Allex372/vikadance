import React from 'react';

import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

import {Navigation} from "./components/Navigation/navigation";
import MainPage from "./components/Navigation/mainPage";
import Books from "./components/Navigation/BooksComponenst/books";
import Video_Lessons from "./components/Navigation/VideoLessons/Video_Lessons";
import HistoryInTheFrame from "./components/Navigation/HistoryIntheFrame/HistoryInTheFrame";
import Standart from "./components/Navigation/BooksComponenst/BallroomFigures/Standart";

export default function App(props) {
    return (
        <Router>
            <Navigation/>
            <Switch>
                <Route path={'/'} exact{...props} component={MainPage}/>
                <Route path='/books' exact{...props} component={Books}/>
                <Route path='/main' exact{...props} component={MainPage}/>
                <Route path='/Video_lessons' exact{...props} component={Video_Lessons}/>
                <Route path='/History_in_the_frame' exact{...props} component={HistoryInTheFrame}/>
                <Route path='/Ballroom_Figures' exact{...props} component={Standart}/>

            </Switch>
        </Router>
    );
}
