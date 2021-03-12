const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { dirname } = require('path');
const { createReadStream, ReadStream } = require('fs');
const path = require('path');
const fetch = require('node-fetch');

const app = express();
const port = 3000;

const CoinGecko = require('coingecko-api');
const { nextTick } = require('process');
const CoinGeckoClient = new CoinGecko();


// app.use(cors)
app.use(express.json())

const movies = [];

// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, '../client/new-movie.html'))
// });

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/find-movie.html'))
})

//middleware function
async function getData(req, res, next){
  let data = await CoinGeckoClient.ping();
  if(data.code === 200) console.log('SUCCESS')
  let coinData = await CoinGeckoClient.coins.all();
  res.locals.data = coinData;
  next();
}

app.get('/api/data', getData, async (req, res) => {
  const data = res.locals.data;
  let bitcoinInfo = data.data[0]
  if(data.success === true) res.send({
    coin : bitcoinInfo.name,
    currentPrice: bitcoinInfo.market_data.current_price.usd,
    satsPerBitcoin: bitcoinInfo.market_data.current_price.sats,
    data: bitcoinInfo.market_data
  })
  res.send('ERROR')
})


app.listen(port, ()=> console.log(`Listening on port ${port}`))