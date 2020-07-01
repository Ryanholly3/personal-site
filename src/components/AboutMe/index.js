import React, { Component } from 'react';
import { Grid, Card, CardContent, Avatar } from '@material-ui/core';
import './styles.css';

export default class AboutMe extends Component {
  render() {
    return (
      <>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                <Avatar variant='rounded' alt="Ryan Holly" src="/ryan.jpeg" style={{ width: '400px', height: "400px"}} />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card>
              <CardContent>
                Software Developer at Trelora Real Estate. 
                My biology research background gives me a 
                scientific approach to solving problems and 
                writing code. I love to solve complex 
                problems creatively, to learn, and to work 
                on motivated teams
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    )
  }
}