const db = require('../util/db');
const client = require('../util/twitter');

exports.results = (req, res) => {
  const query = req.query.q;
  if (query) {
    db.getCollection('searches').insert({ term: query });
    db.saveDatabase();

    client.get('search/tweets', { q: query }, (error, tweets, response) => {
      res.json(tweets);
    });
  } else {
    req.send('error');
  }
};
