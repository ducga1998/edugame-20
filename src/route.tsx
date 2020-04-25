import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Navigation from '../src/components/Navigation'
import React from "react";
import EditVideo from './EditVideo'
const URL_VIDEO = "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4"
export default function RouterComponent() {
    return (
        <Router>
            <div>
               
<Navigation />
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/editVideo">
                        <EditVideo src={URL_VIDEO} />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}