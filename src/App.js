import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, NavDropdown, Nav} from 'react-bootstrap';
import './App.css';
import './index.css';
//import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';

import { Switch, Route, BrowserRouter, Link } from 'react-router-dom'
import Home from './views/Home.js';
import Register from './views/Register';
import Login from './views/Login';
import Product from './views/product/Product';
import CreateProduct from './views/product/CreateProduct';
import EditProduct from './views/product/EditProduct';
let token = localStorage.getItem('token');
class App extends Component {
  ShowLogin(){
    let loginorlogout = <Link className="nav-link" to='/login'>Đăng nhập</Link>;
    if(token){
      loginorlogout = <a className="nav-link" href="/login" onClick={this.logout}>Đăng xuất</a>;
    }
    return loginorlogout;
  }
  logout(){
    localStorage.removeItem('token');
    this.history.push('/login');
  }
  showRegisterOrPost(){
    let registerOrPost = <Link className="nav-link" to='/register'>Đăng ký</Link>;
    if(token){
      registerOrPost = <Link className="nav-link" to='/product'>Sản phẩm</Link>;
    }
    return registerOrPost;
  }
  render() {
    return (<div>
              <div className="container">
                <Navbar bg="light" expand="lg">
                  <Navbar.Brand>
                    <Link className="nav-link" to="/">Dashboard</Link>
                  </Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                    <NavDropdown title="Quản lý tài khoản" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                          <Link to="/product">Danh sách sản phẩm</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <Link to="/catproduct">Danh mục sản phẩm</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <Link>Nhà sản xuất</Link>
                        </NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown title="Quản lý sản phẩm" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                          <Link to="/product">Danh sách sản phẩm</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <Link to="/catproduct">Danh mục sản phẩm</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <Link to="/">Nhà sản xuất</Link>
                        </NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown title="Cấu hình hệ thống" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                          <Link to="/">Cài đặt chung</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <Link to="/">Danh mục sản phẩm</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <Link to="/">Nhà sản xuất</Link>
                        </NavDropdown.Item>
                      </NavDropdown>

                      <NavDropdown title="Thông tin cá nhân" id="basic-nav-dropdown">
                        <NavDropdown.Item>
                          <Link to="/">Cài đặt chung</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <Link to="/">Danh mục sản phẩm</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Item>
                          <Link to="/">Nhà sản xuất</Link>
                        </NavDropdown.Item>
                        <NavDropdown.Divider />
                        <NavDropdown.Item>
                          <Link to="/">Nhà sản xuất</Link>
                        </NavDropdown.Item>
                      </NavDropdown>
                    </Nav>
                  </Navbar.Collapse>
                </Navbar>
            
                <Switch>
                    <Route exact path="/" component = {Home} />
                    <Route path="/register" component = {Register} />
                    <Route path="/auth/login" component = {Login} />
                    <Route path="/product" component = {Product} />
                    <Route path="/create/product" component = {CreateProduct} />
                    <Route path="/edit/product/:id" component = {EditProduct} />
                </Switch>
              </div>
            </div>
    );
  }
}

export default App;
