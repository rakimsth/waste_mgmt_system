module.exports = {
  definitions: {
    // Schedules Model
    Schedules: {
      type: 'object',
      properties: {
        name: {
          type: 'string'
        },
        time: {
          type: 'string'
        },
        day: {
          type: 'string'
        },
        date: {
          type: 'date'
        },
        medium: {
          type: 'string'
        },
        is_active: {
          type: 'boolean',
          description: 'User Status'
        },
        is_approved: {
          type: 'boolean',
          description: 'User Status'
        }
      }
    },
    // Users Model
    Users: {
      type: 'object',
      properties: {
        username: {
          type: 'string'
        },
        firstName: {
          type: 'string'
        },
        lastName: {
          type: 'string'
        },
        email: {
          type: 'string'
        },
        password: {
          type: 'password'
        },
        phone: {
          type: 'string'
        },
        userStatus: {
          type: 'boolean',
          description: 'User Status'
        },
        gender: {
          type: 'string',
          description: 'Gender of User',
          enum: ['M', 'F', 'O', 'U']
        }
      }
    }
  }
};
