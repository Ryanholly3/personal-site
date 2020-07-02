import React, { Component } from 'react';
import { Grid, Card, CardContent, Avatar,Typography } from '@material-ui/core';
import './styles.css';

export default class AboutMe extends Component {
  render() {
    return (
      <>
        <Grid container spacing={6} style={{ height: '100%', display: 'flex', alignItems:'center'}}>
          <Grid item xs={12} sm={5}>
            <Card>
              <CardContent>
                <Typography variant='h3'>
                  About Me
                </Typography>
                <Card style={{ 
                  height: '500px',
                  width: '100%',
                  textAlign: 'center',
                  backgroundImage: 'url("/ryan.jpeg")',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}/>
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