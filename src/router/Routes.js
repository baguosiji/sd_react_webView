import React from 'react'
import {Router, Route, Switch} from 'react-router-dom';
import history from "../denpend/history";
import {ENTER, HOME, MAIN} from "../const/location";
import HomeRoute from "./HomeRoute";
import EnterContainer from "../container/EnterContainer";

//主模块
class Routes extends React.Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path={ENTER} component={EnterContainer}/>
                    <Route path={HOME} component={HomeRoute}/>
                </Switch>
            </Router>
        )
    }
}

export default Routes;