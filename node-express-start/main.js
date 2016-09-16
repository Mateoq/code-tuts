const dotenv = require('dotenv');
dotenv.config();

const app = require('./app/server');

app.listen(8080, () => {
  console.log('Server is running');
});

