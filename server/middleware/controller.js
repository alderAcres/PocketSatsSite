const fetch = require('node-fetch');


const CoinGecko = require('coingecko-api');
const { nextTick } = require('process');
const { default: axios } = require('axios');
const CoinGeckoClient = new CoinGecko();

const controller = {};
controller.getNews = async (req, res, next) => {
  const API_KEY = 'ef95d41ab27b4baea68aa64503274a66';
  const todayDate = new Date().toISOString().slice(0,10);

  const url = `http://newsapi.org/v2/everything?q=bitcoin&from=${todayDate}&sortBy=publishedAt&language=en&apiKey=ef95d41ab27b4baea68aa64503274a66`;

  fetch(url)
  .then(data => data.json())
  .then(data => {
    console.log('newsData', data.articles)
    res.locals.news = data.articles.slice(0, 50)
    next();
  })
 .catch(err => {
   return next({
  log: `controller.getNews: ${err} `,
  message: {err: 'controller.getNews: ERROR: Check server logs for details'}
})
 })

}
controller.getData = async (req, res, next) => {
  console.log('getting data')
  let data = await CoinGeckoClient.ping();
  if(data.code === 200) {
  let coinData = await CoinGeckoClient.coins.all();
  res.locals.data = coinData;
  next();
  } else {
   console.log('ERROR WITH RETRIEVING DATA')
  }
}


module.exports = controller;