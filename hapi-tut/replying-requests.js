const Hapi = require('hapi');
const Boom = require('boom');
const server = new Hapi.Server();

server.connection({ port: 8080 });

server.route({
  method: 'GET',
  path: '/',
  handler: (request, reply) => {
    // String.
    // reply('hello world');
    // Object.
    // reply({ hello: 'world' });
    // Promise.
    // reply(Promise.resolve('hello world'));
    // ReadStream.
    // reply(require('fs').createReadStream(__filename));
    // Error object.
    // reply(new Error('oops'));
    // Boom error.
    reply(Boom.notFound('oops'));
  }
});

server.start(() => {});
