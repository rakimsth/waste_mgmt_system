const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const ScheduleSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    startTime: { type: String },
    endTime: { type: String },
    allDay: { type: Boolean, default: false },
    isRecurring: { type: Boolean, default: false },
    daysOfWeek: [
      {
        type: String,
        enum: ['sunday', 'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday']
      }
    ],
    frequency: { type: String, enum: ['weekly', 'biweekly', 'monthly'] },
    province: { type: String },
    district: { type: String },
    municipality: { type: String },
    location: { type: String },
    assignedTo: { type: ObjectId, ref: 'Groups' },
    description: { type: String },
    created_by: { type: ObjectId, ref: 'Users' },
    updated_by: { type: ObjectId, ref: 'Users' }
  },
  {
    collection: 'schedules',
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    },
    toObject: {
      virtuals: true
    },
    toJson: {
      virtuals: true
    }
  }
);

module.exports = mongoose.model('Schedules', ScheduleSchema);
