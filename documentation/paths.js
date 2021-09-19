module.exports = {
  paths: {
    // schedules API
    '/schedules': {
      post: {
        tags: ['schedules'],
        summary: 'Create a new schedule',
        description: '',
        operationId: 'add',
        consumes: ['application/json'],
        produces: ['application/json', 'application/xml'],
        parameters: [
          {
            in: 'body',
            name: 'body',
            description: 'Required payload for creating new schedule',
            required: true,
            schema: {
              $ref: '#/definitions/Schedules'
            }
          }
        ],
        security: [
          {
            access_token: []
          }
        ],
        responses: {
          200: {
            description: 'successful operation',
            schema: {
              $ref: '#/definitions/Schedules'
            }
          },
          400: {
            description: 'Invalid Schedule'
          }
        }
      }
    }
    // users API
  }
};
