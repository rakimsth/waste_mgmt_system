const apiLocation = process.env.URL;
const apiVersion = '/api/v1';
module.exports = {
  swagger: '2.0',
  info: {
    title: 'Waste Mgmt System API Documentation',
    version: '1.0.0',
    description:
      "This is API Documentation for this waste mgmt application made with Express and documented with Swagger. Most of the API's are not accessible without the token. so, get the token from login API using demo credentials as shown in the API.",
    license: {
      name: 'MIT',
      url: 'https://spdx.org/licenses/MIT.html'
    },
    contact: {
      email: 'rakimsth@gmail.com'
    }
  },
  schemes: ['http', 'https'],
  host: apiLocation,
  basePath: apiVersion,
  securityDefinitions: {
    JWT: {
      type: 'apiKey',
      in: 'header',
      name: 'access_token',
      description: 'get token using user login method'
    }
  }
};
