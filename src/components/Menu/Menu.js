import React, { Component } from 'react';
import {Route, Link} from 'react-router-dom';

const menus = [
  {
    label: 'Home',
    to: '/',
    exact: true,
  },
  {
    label: 'Products Manager',
    to: '/products',
    exact: false,
  }
]
const MenuLink = ({label, to, activeOnlyWhenActive }) =>{
  return (
    <Route
      path={to}
      exact={activeOnlyWhenActive}
      children={({match}) =>{
        var active = match ? 'active':'';
        return(
          <li className={active}>
            <Link to={to}>
              {label}
            </Link>
          </li>
        )
      }}
    />
  )
}
class Menu extends Component {
  render() {
    return (
        <div className="navbar navbar-default">
          <a className="navbar-brand" href>CALL API</a>
          <ul className="nav navbar-nav">
            {this.showMenus(menus)}
          </ul>
        </div>
    );
  } 
  showMenus = (menus) => {
    var result = null;
    if(menus.length > 0){
      result = menus.map((menu, index) => {
        return (
          <MenuLink key={index} label={menu.label} to={menu.to} activeOnlyWhenActive={menu.exact}/>
        )
      })
    }
    return result;
  }
}
export default Menu;
