import React, { Component } from "react"
import {
    HashRouter as Router,
    Route,
    Link
} from "react-router-dom";
import style from "../../../static/style"
import {connect} from "react-redux"
import Store,{actions,ACTION_C,ADD_C,REDUCE_C}from "../../../redux/index"
import asyncGetCom from "../../hoc/asyncGetDataComponent"


class Check extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getdata:Store.getState().getList
        }
    }
    activeClick(data,index){
        Store.dispatch(actions[ACTION_C](data,index))
    }
    addClick(data,index){
        Store.dispatch(actions[ADD_C](data,index))
    }
    reduceClick(data,index){
        Store.dispatch(actions[REDUCE_C](data,index))
    }
    render() {
        return (
            <div>
                <div className={style.connect}>
                    {this.state.getdata.map((val,index)=>{
                        return (<dl key={index}>
                            <dt><img src={require("../../../images/"+val.imgs)} alt=""/></dt>
                            <dd>
                                <h4>{val.title}</h4>
                                <p>{val.text}</p>
                                <h5>
                                    <span>{val.pic}</span>
                                    <span style={{display:val.flag?"none":"block"}} onClick={()=>{this.activeClick(this.state.getdata,index)}}>❤</span>
                                    {val.flag&&<div className={style.spn}>
                                        <span onClick={()=>{this.reduceClick(this.state.getdata,index)}}>-</span>
                                        <span>{val.count}</span>
                                        <span onClick={()=>{this.addClick(this.state.getdata,index)}}>+</span>
                                    </div>}
                                </h5>
                            </dd>
                        </dl>)
                    })}
                </div>
            </div>
        )
    }
}

const select = (state) => {
    return {...state}
}
let hocCom=asyncGetCom(connect(select)(Check),[{url:"/api/data",type:"get"}])

let routerHandle = () => {
    return <Route path="/index/home/check" component={hocCom} />
}
export default routerHandle