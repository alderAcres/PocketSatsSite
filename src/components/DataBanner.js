import React, { Component, useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import axios from 'axios';
import Banner from 'react-js-banner';

const fetch = require('node-fetch');
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

let styles = {
  pBanner : {
    color:'black', 
    marginLeft: '.2vw',
    marginRight: '.2vw',
    lineHeight: '88%'
  },
  divBanner : {
    height: '4.99vh',
    display: 'flex',
    flexDirection:'row', 
    justifyContent:'center',
    fontSize: '1.66vw', 
    alignItems : 'center',
    textAlign: 'center',
    paddingTop: '1.1rem',
    backgroundColor: '#f2a900'
  },
  dataBanner : {
    marginRight: '1vw',
    color: '00000'
  }
}

class DataBanner extends Component {

  constructor(props){
    super(props);
    this.state = {
      currentPrice: '',
      satsPerBitcoin: '',
      priceChangePercentage: '',
      low_24: '',
      high_24: '',
      circulatingSupply: ''
    }
    this.getData = this.getData.bind(this);
  }
 
  getData =  async () => {
        axios.get("/api/data")
        .then(response => response.data)
        .then(bitData => {
          this.setState({...bitData})}
          )
        .catch(err => console.log(err))
        //setState here by invoking setProducts, what you declared on line 12 to be the function that changes state
      //as a second argument to useEffect, we put an array of depencies. or certain things 
      //(like 'test') that will fire off this useEffect function
  }

  componentDidMount(){
    this.getData();
  }


  render() {
    return(
      <div style = {styles.divBanner}>
        <p style= {styles.pBanner}>BTC Price:</p><p style={styles.dataBanner}>{this.state.currentPrice}</p>
        <p style= {styles.pBanner}>24hr Low:</p><p style={styles.dataBanner}>{this.state.low_24}</p>
        <p style= {styles.pBanner}>24hr High:</p><p style={styles.dataBanner}> {this.state.high_24}</p>
        <p style= {styles.pBanner}>24-Hour%:</p><p style = {{color : this.state.priceChangePercentage >= 0 ? '#52A252' : '#E41A1A', alignItems : 'center'}}> {this.state.priceChangePercentage}%</p>
        <p style= {styles.pBanner}>Circ. Supply:</p><p style={styles.dataBanner}> {this.state.circulatingSupply}</p>
      </div>
    )
  }
}

export default DataBanner;
