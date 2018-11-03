import React from 'react';
import {Route, IndexRoute} from 'react-router-dom';
import {AUTHEN, HOME_INDEX, MAIN, ME} from "../const/location";
import MainContainer from "../container/MainContainer";
import AuthenContainer from "../container/AuthenContainer";
import MeContainer from "../container/MeContainer";
import HomeContainer from "../container/HomeContainer";

class HomeRoute extends React.Component {
    render() {
        console.log('???');
        return (
            <div>
                <HomeContainer>
                    <Route exact path={MAIN} component={MainContainer}/>
                    <Route path={AUTHEN} component={AuthenContainer}/>
                    <Route path={ME} component={MeContainer}/>
                </HomeContainer>
            </div>
        )
    }
}

export default HomeRoute;