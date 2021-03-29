import React, { Component, useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import axios from 'axios';

const fetch = require('node-fetch');
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

class Banner extends Component {

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
      <Alert style={{height:'60px', textAlign: 'center', marginTop: '10vh', fontSize: '14px', fontWeight: 'bold', backgroundColor: 'white', borderTop: 'none', borderBottom: '1px solid #4d4d4e', color: '#4d4d4e', padding:'20px 0 0 3px', display: 'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center'}} variant="info">
        <div style={{display: 'flex'}}><p style={{color:'#f2a900', marginRight: '.4vw'}}>BTC Current Price:</p><p>{this.state.currentPrice}</p></div>
        <div style={{display: 'flex'}}><p style={{color:'#f2a900', marginRight: '.4vw'}}>24hr Low:</p><p>{this.state.low_24}</p></div>
        <div style={{display: 'flex'}}><p style={{color:'#f2a900', marginRight: '.4vw'}}>24hr High:</p><p> {this.state.high_24}</p></div>
        <div style={{display: 'flex'}}><p style={{color:'#f2a900', marginRight: '.4vw'}}>Sats Per Bitcoin:</p><p>100,000,000</p></div>
        <div style={{display: 'flex'}}><p style={{color:'#f2a900', marginRight: '.4vw'}}>24-Hour % Change:</p><p> {this.state.priceChangePercentage}%</p></div>
        <div style={{display: 'flex'}}><p style={{color:'#f2a900', marginRight: '.4vw'}}>Circulating Supply:</p><p> {this.state.circulatingSupply}/ 21,000,000</p></div>
     </Alert>
  
    )
  }
}

export default Banner;
