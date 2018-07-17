import React from "react";
import reactDom from "react-dom";
import App from "./router/index";
import { Provider } from "react-redux";
import Store from "./redux/index";
import "antd-mobile/dist/antd-mobile.css";

reactDom.render( < Provider store = { Store } >
        <
        App / >
        <
        /Provider>, document.getElementById("app"))