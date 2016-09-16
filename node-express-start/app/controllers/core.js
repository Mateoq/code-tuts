const db = require('../util/db');
const client = require('../util/twitter');

exports.home = (req, res) => {
  db.loadDatabase({}, () => {
    res.render('index', {
      searches: db.getCollection('searches').data
    });
  });
};

exports.top = (req, res) => {
  db.loadDatabase({}, () => {
    res.render('top', {
      terms: db.getCollection('top').data
    });
  });
};

exports.results = (req, res) => {
  const query = req.query.q;
  if (query) {
    db.getCollection('searches').insert({ term: query });
    db.saveDatabase();

    client.get('search/tweets', { q: query }, (error, tweets, response) => {
      res.render('results', { query: query, tweets: tweets.statuses });
    });
  } else {
    req.send('error');
  }
};

