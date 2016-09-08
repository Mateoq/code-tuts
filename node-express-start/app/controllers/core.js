const db = require('../util/db');

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
  })
};

