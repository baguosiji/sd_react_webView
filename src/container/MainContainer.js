import React from 'react';
import {communication} from "../tools/communication";
import {asyncActionMember, liveBody, navigate} from "../const/data";

const LOGIN = 'login';

class MainContainer extends React.Component {
    render() {
        return (
            <div>
                首页
                <button onClick={() => {
                    this.jump()
                }}>
                    点击跳转页面
                </button>

                <button onClick={() => {
                    this.handleRedux()
                }}>
                    点击刷新member
                </button>

                
                <div style={{padding: 20, backgroundColor: 'red'}} onClick={() => {
                    this.handleSDK()
                }}>
                    点击调用扫脸
                </div>
            </div>
        );
    };

    jump() {
        communication({name: navigate, params: LOGIN});
    };

    handleRedux() {
        communication({name: asyncActionMember});
    };

    handleSDK() {
        communication({name: liveBody});
    };

}

export default MainContainer;