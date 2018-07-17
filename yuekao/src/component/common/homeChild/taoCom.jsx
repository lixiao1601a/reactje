import React, { Component } from "react"
import {
    HashRouter as Router,
    Route,
    Link
} from "react-router-dom";
//import Store from "../redux/index"

class Tao extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: ""
        }
    }
    render() {
        return (
            <div>
              套装
            </div>
        )
    }
}
let routerHandle = () => {
    return <Route path="/index/home/tao" component={Tao} />
}
export default routerHandle