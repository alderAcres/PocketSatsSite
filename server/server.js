const express = require('express');
const bodyParser = require('body-parser');
const { dirname } = require('path');
const { createReadStream, ReadStream } = require('fs');
const path = require('path');


const app = express();
const port = 3000;

const CoinGecko = require('coingecko-api');
const { nextTick } = require('process');
const CoinGeckoClient = new CoinGecko();



app.use(express.json())
app.use("/build", express.static(path.join(__dirname, "../build")))
const movies = [];


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
    // data: bitcoinInfo.market_data
  })
  res.sendStatus(404)
})

app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});


app.listen(port, ()=> console.log(`Listening on port ${port}`))