import React, { Component } from "react"
import {
    HashRouter as Router,
    Route,
    Link
} from "react-router-dom";
//import Store from "../redux/index"

class Me extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: ""
        }
    }
    render() {
        return (
            <div>
              我的
            </div>
        )
    }
}
let routerHandle = () => {
    return <Route path="/index/me" component={Me} />
}
export default routerHandle