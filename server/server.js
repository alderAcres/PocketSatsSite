const express = require('express');
const bodyParser = require('body-parser');
const { dirname } = require('path');
const { createReadStream, ReadStream } = require('fs');
const path = require('path');
const fetch = require('node-fetch');
const controller = require('./middleware/controller.js')
const cors = require('cors');

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(express.json())


app.use("/build", express.static(path.join(__dirname, "../build")))

 //CORS headers needed for exension:
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header("Access-Control-Allow-Headers", "*")
  next();
});

app.get('/api/news', controller.getNews, (req, res) => {
  const newsData = res.locals.news;
  res.status(200).send(newsData);
})

app.get('/api/data', controller.getData, (req, res) => {

  const data = res.locals.data;
  let bitcoinInfo = data.data[0];
  if(data.success === true) res.send({
    currentPrice: bitcoinInfo.market_data.current_price.usd,
    satsPerBitcoin: bitcoinInfo.market_data.current_price.sats,
    priceChangePercentage: bitcoinInfo.market_data.price_change_percentage_24h,
    low_24: bitcoinInfo.market_data.low_24h.usd,
    high_24: bitcoinInfo.market_data.high_24h.usd,
    circulatingSupply: bitcoinInfo.market_data.circulating_supply
  }) 
  else res.sendStatus(404);
})


app.get('/', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../index.html'));
});

//catch all route for rputes thar are unknown
app.use('/*',(req,res) => res.sendStatus(404));

//catch route for errors
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred' }, 
  };

  const errorObj = Object.assign(defaultErr, err);
  console.log('errorObj log:', errorObj.log)
  
  console.error(errorObj.log)
  res.status(errorObj.status).send(JSON.stringify(errorObj.message));
})

app.listen(port, ()=> console.log(`Listening on port ${port}`))