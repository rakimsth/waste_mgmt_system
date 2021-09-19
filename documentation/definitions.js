module.exports = {
  definitions: {
    // Schedules Model
    Schedules: {
      type: 'object',
      properties: {
        name: { type: 'string', description: 'Name of the Schedule' },
        startTime: {
          type: 'string',
          description: 'Start Time in HH:MM 12 Hour Format',
          example: '1:00 PM'
        },
        endTime: {
          type: 'string',
          description: 'End Time in HH:MM 12 Hour Format',
          example: '3:00 PM'
        },
        allDay: {
          type: 'boolean',
          description: 'Is it all day event?'
        },
        isRecurring: {
          type: 'boolean',
          description: 'Does this schedule repeat?'
        },
        daysOfWeek: {
          type: 'array',
          items: { type: 'string', description: 'Days of a Week', example: 'Sunday,Monday,Tuesday' }
        },
        frequency: {
          type: 'string',
          description: 'How often does this schedule repeat?',
          enum: ['weekly', 'biweekly', 'monthly'],
          example: 'weekly'
        },
        province: { type: 'string', description: 'Province Name', example: 'Bagmati Province' },
        district: { type: 'string', description: 'District Name', example: 'Kathmandu' },
        municipality: { type: 'string', description: 'Municipality Name', example: 'Kathmandu' },
        location: { type: 'string', description: 'Area/Tole Name', example: 'New Baneshwor' },
        description: {
          type: 'string',
          description: 'Describe the Schedule',
          example: 'Schedule for New Baneshwor Area'
        }
      }
    },
    // Users Model
    Users: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
          description: 'Full Name of User'
        },
        email: {
          type: 'string',
          description: 'Valid email of User'
        },
        phone: {
          type: 'string',
          description: 'Valid Phone Number of User'
        },
        gender: {
          type: 'string',
          description: 'Gender of User',
          enum: ['M', 'F', 'O', 'U']
        },
        dob: {
          type: 'string',
          format: 'date',
          description: 'Date of Birth in AD',
          example: '2020-01-01'
        },
        address: {
          type: 'string',
          description: 'Current Address of User',
          example: 'New Road, Kathmandu'
        },
        password: {
          type: 'string',
          format: 'password'
        },
        picture: {
          type: 'string',
          description: 'Path of stored profile image'
        },
        social: {
          type: 'object',
          description: 'Social login data to be stored here'
        },
        roles: {
          type: 'array',
          items: { type: 'string', description: 'Assigned role to user', example: 'Manager' }
        },
        extras: {
          type: 'object',
          description: 'Additional Information of user such as department, branch etc'
        }
      }
    }
  }
};
