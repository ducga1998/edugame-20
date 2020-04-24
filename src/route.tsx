import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import React from "react";
import EditVideo from './EditVideo'
export default function RouterComponent() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to="/editVideo">Edit Video</Link>
                        </li>
                    </ul>
                </nav>

                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/editVideo">
                        <EditVideo />
                    </Route>

                </Switch>
            </div>
        </Router>
    );
}