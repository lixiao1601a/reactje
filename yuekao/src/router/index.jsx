import React,{Component} from "react"
import {
    HashRouter as Router,
    Route,
    Switch
} from "react-router-dom";


import App from "../component/app";
import Index from "../component/index";


export default ()=>{
    return (
        <Router>
            <App>
                <Index/>
            </App>
        </Router>
    )
}