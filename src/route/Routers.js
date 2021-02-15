import React, {Component} from 'react';
import Test from "../component/Test";
import Login from "../component/Login";
import Api from "../component/LoginApi";
import Reg from "../component/Register";
import Menu from "../component/Menu";
import { BrowserRouter as Router, Route } from "react-router-dom";

class Routers extends Component {
    render() {
        return (
            <Router>
                <Route exact path="/" component={Login} />
                <Route exact path="/test" component={Test} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/api" component={Api} />
                <Route exact path="/register" component={Reg} />
                <Route exact path="/menu" component={Menu} />
            </Router>
        );
    }
}

export default Routers;