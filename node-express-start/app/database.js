const loki = require('lokijs');

const db = new looki('db.json');

db.addCollection('top').insert([
  { term: 'Javascript', style: 'warning' },
  { term: 'Angular 2', style: 'danger' },
  { term: 'NodeJs', style: 'success' },
  { term: 'Golang', style: 'info' },
  { term: 'REST', style: 'primary' }
]);

db.addCollection('searches');

db.saveDatabase();

