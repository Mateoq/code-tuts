const Hapi = require('hapi');
const Good = require('good');

const server = new Hapi.Server();

const goodOptions = {
  ops: {
    interval: 1000
  },
  reporters: {
    consoleReporter: [{
      module: 'good-squeeze',
      name: 'Squeeze',
      args: [{ log: '*', response: '*' }]
    }, {
      module: 'good-console'
    }, 'stdout']
  }
};

server.connection({
  host: 'localhost',
  port: 8080
});

server.register({
  register: Good,
  options: goodOptions
}, (err) => {
  server.route({
    method: 'GET',
    path: '/',
    handler(request, reply) {
      reply('hello hapi');
    }
  });

  server.route({
    method: 'GET',
    path: '/{name}',
    handler(request, reply) {
      reply(`Hello ${request.params.name}`);
    }
  });

  // Url param optional
  server.route({
    method: 'GET',
    path: '/users/{userId?}',
    handler: (request, reply) => {
      reply(request.params);
    }
  });

  // Url param wild card
  // e.g. http://localhost/files/a/b/c.png
  server.route({
    method: 'GET',
    path: '/files/{file*}',
    handler: (request, reply) => {
      reply(request.params);
    }
  });

  server.start(() => {
    console.log(`Started at: ${server.info.uri}`);
  });
});

