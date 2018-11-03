import React from 'react';
import RouteHelper from "../tools/RouteHelper";
import {HOME, HOME_INDEX, MAIN} from "../const/location";

class EnterContainer extends React.Component {
    render() {
        return (
            <div>
                enter
                <button onClick={() => {
                    RouteHelper.locationTo(HOME)
                }}>
                    点击
                </button>
            </div>
        )
    }
}

export default EnterContainer;