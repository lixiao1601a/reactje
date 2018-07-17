import React, { Component } from "react"
import {
    HashRouter as Router,
    Route,
    Link
} from "react-router-dom";

import style from "../../static/style"
import Store, { actions, ACTION_C, ADD_C, REDUCE_C } from "../../redux/index"
import { connect } from "react-redux"
import AsyncGetDataComponent from "../hoc/asyncGetDataComponent"

class Dai extends Component {
    constructor(props) {
        super(props);
        this.state = {
            targ: true,
            data: Store.getState().getList
        }
    }
    shopp() {
        this.setState({
            targ: !this.state.targ
        })
    }
    addClick(data, index) {
        Store.dispatch(actions[ADD_C](data, index))
    }
    reduceClick(data, index) {
        Store.dispatch(actions[REDUCE_C](data, index))
    }
    render() {
        return (
            <div>
                {this.state.targ ? <div className={style.box}>
                    <div className={style.bigbox}>
                        <div className={style.title}>
                            <span onClick={this.shopp.bind(this)}>《</span>
                            <div>
                                {this.state.data.map((val, index) => {
                                    if (val.count > 0) {
                                        return (<ul className={style.uls} key={index}>
                                            <li>
                                                <h5>{val.title}</h5>
                                                <h5>
                                                    {val.flag && <div className={style.spn}>
                                                        <span onClick={() => { this.reduceClick(this.state.data, index) }}>-</span>
                                                        <span>{val.count}</span>
                                                        <span onClick={() => { this.addClick(this.state.data, index) }}>+</span>
                                                    </div>}
                                                </h5>
                                            </li>
                                        </ul>)
                                    }
                                })}

                            </div>
                            {this.state.data.map((val, i) => {
                                let sum=val.count * val.pic
                                    return (
                                        <div key={i}>总价：<b>{sum}</b></div>
                                    )
                            })}

                        </div>
                    </div>
                </div> : null}
            </div>

        )
    }
}
let select = (state) => {
    return { ...state }
}

let hocCom = connect(select)(Dai)

export default hocCom