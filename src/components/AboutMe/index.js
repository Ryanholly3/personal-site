import React, { Component } from 'react';
import { Grid, Card, CardContent, Typography } from '@material-ui/core';
import './styles.css';

export default class AboutMe extends Component {
  constructor(props){
    super(props)
    this.experience = {
      years: null,
      months: null
    }
    this.calculateExperience()
  }
  
  calculateExperience = () => {
    let now = new Date()
    let startDate = new Date(2018, 11)
    let totalMonths = this.calculateMonths(startDate, now)
    let years = Math.floor(totalMonths / 12)
    let months = totalMonths - (years * 12)
    this.experience = {
      years: years,
      months: months
    }
  }

  calculateMonths = (dateFrom, dateTo) => {
    return dateTo.getMonth() - dateFrom.getMonth() + (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
  }


  render() {
    const { years, months } = this.experience

   let monthString
    if(months === 0){
      monthString = ''
    } else if (months === 1){
      monthString = '1 month'
    } else {
      monthString = `${months} months`
    }

    return (
      <>
        <Grid container spacing={6} style={{ height: '100%', display: 'flex', alignItems:'center'}}>
          <Grid item xs={12} sm={4}>
            <Card>
              <CardContent>
                <Typography variant='h3'>
                  About Me
                </Typography>
                <Card style={{ 
                  height: '400px',
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
          <Grid item xs={12} sm={8}>
            <Card>
              <CardContent>
                Currently a Full-stack developer at Trelora Real Estate.

                With {years} year{years > 1 ? 's' : ''} {monthString} of professional software experience,
                

              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </>
    )
  }
}