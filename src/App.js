import React , { Component, Suspense } from 'react'; 
import { withRouter, Route, Switch, Link } from "react-router-dom";

import routes from  './routes';

// import "./assets/sass/components/navbars/navbar-site.scss";
import "./assets/css/navbar-site.css";
import "./assets/css/main-site.css";
import "./assets/css/footer-site.css";

class App extends  Component { 
    constructor(props) { 
        super(props); 
        this.state = { } 
    } 

    render() { 
        return( 
            <div className="site"> 
                <header className="header-site">
                    <nav  className="nav navbar-nav navbar-site">
                        <ul>
                            {routes.map((route, idx) => {
                                if (route.parent === "/") {
                                    return (
                                        <li className="" key={idx}><Link to={route.path}><i className="fa fa-folder-open"></i> {route.title}</Link></li>
                                    )
                                }
                            })}
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Hooks <b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    {routes.map((route, idx) => {
                                        if (route.parent === "/hooks") {
                                            return (
                                                <li className="" key={idx}><Link to={route.path}><i className="fa fa-folder-open"></i> {route.title}</Link></li>
                                            )
                                        }
                                    })}
                                </ul>
                            </li>
                            <li className="dropdown">
                                <a href="#" className="dropdown-toggle" data-toggle="dropdown">Redux <b className="caret"></b></a>
                                <ul className="dropdown-menu">
                                    {routes.map((route, idx) => {
                                        if (route.parent === "/redux") {
                                            return (
                                                <li className="" key={idx}><Link to={route.path}><i className="fa fa-folder-open"></i> {route.title}</Link></li>
                                            )
                                        }
                                    })}
                                </ul>
                            </li>
                        </ul>
                    </nav>
                </header> 

                <main className="container main-site">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Switch>
                            {routes.map((prop, idx) => (
                                <Route exact path={prop.path} render={props => (<prop.component {...props} />)} key={idx} />
                            ))}

                            {/* {routes.map((prop, idx) => (
                                <Route exact path={prop.path} component={prop.component} key={idx} />
                            ))} */}
                        </Switch>
                    </Suspense>
                </main>    

                <footer className="footer-site">
                    <p>© Todos os Direitos Reservados 2020</p>
                </footer>       
            </div> 
        ) 
    } 
} 
 
export default withRouter(App);