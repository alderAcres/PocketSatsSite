import React, { Component, useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import axios from 'axios';

const fetch = require('node-fetch');
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

// const Banner = () => {
//   const [data, setData] = useState([]);

//     useEffect(() => {
//       const fetchData = async () => {
//         axios.get("/api/data")
//         .then(bitData => console.log(bitData.data))
//         .then(newState => {
//           setData(newState)
//         })
//         .then(el => console.log(this.state))
//         .catch(err => console.log(err))
//         //setState here by invoking setProducts, what you declared on line 12 to be the function that changes state
//       }
  
//       fetchData();
//       //as a second argument to useEffect, we put an array of depencies. or certain things 
//       //(like 'test') that will fire off this useEffect function
//     }, [])

//   return (
//     <Alert style={{height:'35px', padding:'20px 0 0 3px', display: 'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', margin:' 73px 0 100px 0'}} variant="info">
//     <p>{data}</p>   
//     </Alert>
//   )
// }

// export default Banner


class Banner extends Component {

  constructor(props){
    super(props);
    this.state = {
      coin: 'default',
      currentPrice: 55555,
      satsPerBitcoin: 12345677
    }
    this.getData = this.getData.bind(this);
  }

  getData =  async () => {
        axios.get("/api/data")
        .then(response => response.data)
        .then(bitData => this.setState({...bitData}))
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
      <Alert style={{height:'35px', padding:'20px 0 0 3px', display: 'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', margin:' 73px 0 100px 0'}} variant="info">
     <p>{this.state.coin}</p><p>{this.state.currentPrice}</p><p>{this.state.satsPerBitcoin}</p>   </Alert>
  
    )
  }
}

export default Banner;
