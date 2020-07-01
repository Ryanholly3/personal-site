import React, { Component } from 'react';
import { AppBar, Toolbar, Button } from '@material-ui/core';
import {
  Link
} from "react-router-dom";
import './styles.css';

export default class NavigationBar extends Component {

  render() {
    return (
      <AppBar postition='static'>
        <Toolbar>
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>
            <Button color="inherit">Home</Button>
          </Link>
          <Link to="/about-me" style={{ textDecoration: 'none', color: 'white' }}>
            <Button color="inherit">About Me</Button>
          </Link>
          <Link to="/projects" style={{ textDecoration: 'none', color: 'white' }}>
            <Button color="inherit">Projects</Button>
          </Link>
        </Toolbar>
      </AppBar>
    )
  }
}