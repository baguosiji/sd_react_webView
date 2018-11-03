import React from 'react'
import {Router,Route,Switch} from 'react-router-dom';
import history from "../denpend/history";
class Routes extends React.Component{
    render(){
        return (
            <Router history={history}>
                <Switch>
                    <Route/>
                </Switch>
            </Router>
        )
    }
}