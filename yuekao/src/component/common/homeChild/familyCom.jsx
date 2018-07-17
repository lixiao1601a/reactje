import React, { Component } from "react"
import {
    HashRouter as Router,
    Route,
    Link
} from "react-router-dom";
//import Store from "../redux/index"

class Family extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: ""
        }
    }
    render() {
        return (
            <div>
              家庭
            </div>
        )
    }
}
let routerHandle = () => {
    return <Route path="/index/home/family" component={Family} />
}
export default routerHandle