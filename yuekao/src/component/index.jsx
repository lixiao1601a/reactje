import React, { Component } from "react"
import {
    HashRouter as Router,
    Route,
    Link
} from "react-router-dom";
import Store from "../redux/index"
import Home from "../component/common/home"
import Me from "../component/common/me"
import Dai from "../component/common/dai"
import style from "../static/style"

class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targ:false
        }
    }
    shopp(){
        this.setState({
            targ:!this.state.targ
        })
    }
    render() {
        return (
            <div>
                {this.state.targ?<Dai/>:null}
                <div>
                    {this.props.children}
                </div>
                <ul className={style.footer}>
                    <li><Link to="/index/home">主页</Link></li>
                    <li onClick={this.shopp.bind(this)}>购物袋</li>
                    <li><Link to="/index/me">我的</Link></li>
                </ul>
            </div>
        )
    }
}
let IndexRouter=()=>{
    return (<Router>
        <Index>
            <Home/>
            <Me/>
        </Index>
    </Router>)
}
let routerHandle = () => {
    return <Route path="/index" component={IndexRouter} />
}
export default routerHandle