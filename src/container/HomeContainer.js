import React from 'react';
import {
    HashRouter,
    Route,
    Link,
    Switch
} from 'react-router-dom';
import {AUTHEN, MAIN, ME} from "../const/location";

class HomeContainer extends React.Component {
    render() {
        console.log(this.props);

        return (
            <div>
                {this.props.children}
                home
                <div>
                    <Link to={MAIN}>首页</Link>
                    <Link to={AUTHEN}>认证</Link>
                    <Link to={ME}>我的</Link>
                </div>
            </div>
        )
    }
}

export default HomeContainer;