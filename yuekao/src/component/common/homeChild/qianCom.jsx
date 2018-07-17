import React, { Component } from "react"
import {
    HashRouter as Router,
    Route,
    Link
} from "react-router-dom";
//import Store from "../redux/index"

class Qian extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: ""
        }
    }
    render() {
        return (
            <div>
              纤巧
            </div>
        )
    }
}
let routerHandle = () => {
    return <Route path="/index/home/qian" component={Qian} />
}
export default routerHandle