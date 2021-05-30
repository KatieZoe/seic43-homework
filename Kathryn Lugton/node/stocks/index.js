const express = require('express');
const axios = require('axios');
const ejs = require('ejs');
const stockfinder = require('stockfinder');

const server = express();
server.use(express.static('public'));
server.set('view-engine', ejs);
const PORT = 2222;
const APIKEY = 'pk_16a849fd637243a79fff90fa4d42bc5d';

server.get('/', (req, res) => {
  res.render('stocks.ejs')
});

server.get('/stockbalance', (req, res) => {
  stockfinder.getStock( {ticker: req.query.stockquery, apiKey: APIKEY} ).then((result) => {
    res.render('stockbalance.ejs', { price: result.iexRealtimePrice, query: req.query.stockquery })
  });
});

server.listen(PORT, () => console.log(`Listening on http://localhost:${ PORT }/`));
