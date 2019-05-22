import React, {Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import Home from "./Home.js";
import Male from "./Male";
import Female from "./Female";
import Australian from "./Australian";
import './Style.css';

class Main extends Component {
    render(){
        return(
            <HashRouter>
                <div>
                    <h1 className="Title">Fetching Data Api</h1>
                    <nav className='navlink'>   
                    <ul className="header">
                        <li><NavLink exact to="/">Home</NavLink></li>
                        <li><NavLink exact to="/male">Male</NavLink></li>
                        <li><NavLink exact to="/female">Female</NavLink></li>
                        <li><NavLink exact to="/australian">Australian</NavLink></li>


                       
                    </ul>
                    </nav>
                    <div className="content">
                        <Route exact path="/" component={Home}/>
                        <Route exact path="/male" component={Male}/>
                        <Route exact path="/female" component={Female}/>
                        <Route exact path="/australian" component={Australian}/>

                        
                    </div>
                </div>
                </HashRouter>
        );
        
    }
}

export default Main;