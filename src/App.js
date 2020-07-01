import React, { Component } from 'react';
import NavigationBar from './components/NavigationBar/index.js';
import Home from './components/Home/index.js';
import AboutMe from './components/AboutMe/index.js';
import Projects from './components/Projects/index.js';

import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { Container } from '@material-ui/core';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './App.css';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#223240'
    }
  },
})

export default class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Router>
            <NavigationBar />
            <Container maxWidth="md" style={{ height: '100vh', paddingTop: '64px'}}>
              <Switch>
                <Route path="/about-me">
                  <AboutMe />
                </Route>
                <Route path="/projects">
                  <Projects />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </Container>
          </Router>
        </div>
      </ThemeProvider>
    );
  }
}