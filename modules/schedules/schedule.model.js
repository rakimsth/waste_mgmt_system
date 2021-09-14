const mongoose = require('mongoose');

const ScheduleSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    time: { type: String, required: true },
    day: { type: String },
    date: { type: Date, required: true },
    medium: { type: String },
    is_active: { type: Boolean, required: true, default: true },
    is_approved: { type: Boolean, required: true, default: true }
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
