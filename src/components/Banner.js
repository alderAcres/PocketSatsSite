import React, { Component, useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap';
// import axios from 'axios';
const fetch = require('node-fetch');
const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();



class Banner extends Component {

  constructor(props){
    super(props);
    this.state = {
      coin: 'Bitcoin',
      currentPrice: 55555,
      satsPerBitcoin: 2336873
    }
  }

  // getData(){
  //   setTimeout( async () => {
    
  //       let bitData = await CoinGeckoClient.ping();
  //       if(bitData.code === 200) console.log('SUCCESS')
  //       else console.log('FAILED TO FETCH DATA')

  //       // let coinData = await CoinGeckoClient.coins.all();
  //       // let bitcoinInfo = coinData.data[0]
  //       // const data = {
  //       //   coin : bitcoinInfo.name,
  //       //   currentPrice: bitcoinInfo.market_data.current_price.usd,
  //       //   satsPerBitcoin: bitcoinInfo.market_data.current_price.sats,
  //       // }
  //       //to get more data: data: bitcoinInfo.market_data
  //       //to reach backend...
  //     // const res = await axios.get('/api/data');
  //       //once we fetch product data (using axios here) we want to set it to the lcoal state
  //     //setState here by invoking setProducts, what you declared on line 12 to be the function that changes state
  //     // this.setState({
  //     //   coin: data.coin,
  //     //   currentPrice: data.currentPrice,
  //     //   satsPerBitcoin: data.satsPerBitcoin
  //     // })
  //   }, 1000)
  // }

  // componentDidMount(){
  //   this.getData();
  // }

  render() {
    return(
      <Alert style={{height:'35px', padding:'20px 0 0 3px', display: 'flex', flexDirection:'row', justifyContent:'space-around', alignItems:'center', margin:' 73px 0 100px 0'}} variant="info">
     <p>{this.state.coin}</p><p>Current Price: {this.state.currentPrice}</p><p>Sats Per Bitcoin: {this.state.satsPerBitcoin}</p>
   </Alert>
    )
  }
}


// // const Banner = () => {
// //   //usestate hook allows us to use a local state in an arrow component function
// //   const [data, setData] = useState([]) 

// //   //use effects allows us to immediately invoke useEffects and it is invoked with every rerender
// //   //ALWAYS use useEffect for ASYNC tasks
// //   componentDidMount() {
// //     const getData = async () => {
    
// //       // let bitData = await CoinGeckoClient.ping();
// //       // if(bitData.code === 200) console.log('SUCCESS')
// //       // else console.log('FAILED TO FETCH DATA')

// //       let coinData = CoinGeckoClient.coins.all();
// //       let bitcoinInfo = coinData.data[0]
// //       const data = {
// //         coin : bitcoinInfo.name,
// //         currentPrice: bitcoinInfo.market_data.current_price.usd,
// //         satsPerBitcoin: bitcoinInfo.market_data.current_price.sats,
// //       }
// //       //to get more data: data: bitcoinInfo.market_data
// //       //to reach backend...
// //     // const res = await axios.get('/api/data');
// //       //once we fetch product data (using axios here) we want to set it to the lcoal state
// //       console.log(data)
// //     //setState here by invoking setProducts, what you declared on line 12 to be the function that changes state
// //     setData(data);
// //   }

// //   fetchData();
// //   }
// //   useEffect(() => {
// //     const fetchData = async () => {
    
// //         // let bitData = await CoinGeckoClient.ping();
// //         // if(bitData.code === 200) console.log('SUCCESS')
// //         // else console.log('FAILED TO FETCH DATA')

// //         let coinData = CoinGeckoClient.coins.all();
// //         let bitcoinInfo = coinData.data[0]
// //         const data = {
// //           coin : bitcoinInfo.name,
// //           currentPrice: bitcoinInfo.market_data.current_price.usd,
// //           satsPerBitcoin: bitcoinInfo.market_data.current_price.sats,
// //         }
// //         //to get more data: data: bitcoinInfo.market_data
// //         //to reach backend...
// //       // const res = await axios.get('/api/data');
// //         //once we fetch product data (using axios here) we want to set it to the lcoal state
// //         console.log(data)
// //       //setState here by invoking setProducts, what you declared on line 12 to be the function that changes state
// //       setData(data);
// //     }

// //     fetchData();
// //     //as a second argument to useEffect, we put an array of depencies. or certain things 
// //     //(like 'test') that will fire off this useEffect function
// //   }, [])

// //   //had to add a proxy to the backend port 5050, so that when we make the get request for product data
// //   // to the backend, it looks on server 5050 (backend) rather than 3000 frontend. This was done in package.json
// //   //under "proxy" and 127.0.0.1 is loop back address or the local host always
// //   return (
// //     <Alert style={{margin:' 100px 0 100px 0'}} variant="info">
// //      <h1>WHATTTT</h1> 
// //   </Alert>
// //   );
// // };

export default Banner;
