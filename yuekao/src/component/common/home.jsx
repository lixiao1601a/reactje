import React, { Component } from "react"
import {
    HashRouter as Router,
    Route,
    Link
} from "react-router-dom";
//import Store from "../redux/index"
import {connect} from "react-redux";
import style from "../../static/style"
import AsyncGetDataComponent from "../hoc/asyncGetDataComponent"
import Store,{actions,GETLIST_C} from "../../redux/index"

import Check from "../common/homeChild/checkCom"
import Qian from "../common/homeChild/qianCom"
import Family from "../common/homeChild/familyCom"
import Good from "../common/homeChild/goodCom"
import Tao from "../common/homeChild/taoCom"


class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            num: ""
        }
        // console.log(Store.getState().getList)
    }
    render() {
        return (
            <div>
              <ul className={style.nav}>
                  <li><Link to="/index/home/check">自选</Link></li>
                  <li><Link to="/index/home/qian">纤巧</Link></li>
                  <li><Link to="/index/home/family">家庭</Link></li>
                  <li><Link to="/index/home/tao">套装</Link></li>
                  <li><Link to="/index/home/good">福利</Link></li>
              </ul>
              <div className={style.section}>
                  {this.props.children}
              </div>
            </div>
        )
    }
}
let HomeRouter=()=>{
    return(<Router>
        <Home>
            <Check/>
            <Qian/>
            <Family/>
            <Good/>
            <Tao/>
        </Home>
    </Router>)
}
// let select=(state)=>{
//     Store.dispatch(actions[GETLIST_C](state))
//     return {...state}
// }

// let hocCom=AsyncGetDataComponent(connect(select)(HomeRouter),[{url:"/api/data",type:"get"}]) 

let routerHandle = () => {
    return <Route path="/index/home" component={HomeRouter} />
}
export default routerHandle