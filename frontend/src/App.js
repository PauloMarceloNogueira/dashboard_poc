import React, { Component } from 'react';
import {
  Route,
  NavLink,
  HashRouter
} from 'react-router-dom'
import './App.css';
import Home from './Home'
import Monitorings from './Monitorings'
import { DropdownButton, MenuItem } from 'react-bootstrap';
import $ from 'jquery';
class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <div className="throbber"></div>
          <div id="noty-holder"></div>
          <div id="wrapper">
              <nav className="navbar navbar-inverse navbar-fixed-top" role="navigation">
                  <div className="navbar-header">
                      <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-ex1-collapse">
                          <span className="sr-only">Toggle navigation</span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                          <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href="/"></a>
                  </div>
                  <ul className="nav navbar-right top-nav">
                      <li><a href="#" data-placement="bottom" data-toggle="tooltip" href="#" data-original-title="Stats"><i className="fa fa-bar-chart-o"></i>
                          </a>
                      </li>            
                      <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown">Admin User <b className="fa fa-angle-down"></b></a>
                          <ul className="dropdown-menu">
                              <li><a href="#"><i className="fa fa-fw fa-user"></i> Edit Profile</a></li>
                              <li><a href="#"><i className="fa fa-fw fa-cog"></i> Change Password</a></li>
                              <li className="divider"></li>
                              <li><a href="#"><i className="fa fa-fw fa-power-off"></i> Logout</a></li>
                          </ul>
                      </li>
                  </ul>
                  <div className="collapse navbar-collapse navbar-ex1-collapse">
                      <ul className="nav navbar-nav side-nav">
                          <li>
                            <NavLink to="/"> <i className="fa fa-fw fa-star"></i>home</NavLink>
                          </li>
                          <li>
                              <NavLink to="/monitorings"> <i className="fa fa-fw fa-plus-square-o"></i> monitoramentos</NavLink>
                          </li>
                          <li>
                              <NavLink to="/tags"> <i className="fa fa-fw fa-tags"></i> tags</NavLink>
                          </li>
                          <li>
                              <NavLink to="/roles"> <i className="fa fa-fw fa-sitemap"></i> regras</NavLink>
                          </li>
                          <li>
                              <NavLink to="/searches"> <i className="fa fa-fw fa-search"></i> buscas</NavLink>
                          </li>
                      </ul>
                  </div>
              </nav>

              <div id="page-wrapper">
                  <div className="container-fluid">
                      <div className="row" id="main" >
                          <div className="col-sm-12 col-md-12 well" id="content">
                              <h1>Welcome Admin!</h1>
                              <Route path="/" component={Home}/>
                              <Route path="/monitorings" component={Monitorings}/>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
