const core = require('./controllers/core');
const api = require('./controllers/api');

module.exports = (app) => {
  app.get('/', core.home);

  app.get('/top', core.top);

  app.get('/results', core.results);

  app.get('/api/results', api.results);
};

