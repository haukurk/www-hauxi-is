import * as React from 'react';
import {
    Menu
  } from 'semantic-ui-react';

import './styles.css';
import HaukurLogo from './img/haukur-face.png';

export default class Header extends React.Component {
  render() {
    return (
        <Menu className="nav" stackable={true} buttons={true}>
            <Menu.Item className="left">
                <img className="topLogo" src={HaukurLogo} alt="Haukur"  />
            </Menu.Item>
            <Menu.Item className="center nameItem">
                <span className="name">Haukur Kristinsson</span>
            </Menu.Item>
            <Menu.Item className="right"><a href="#fd">Contact</a></Menu.Item>
        </Menu>
    );
  }
}
