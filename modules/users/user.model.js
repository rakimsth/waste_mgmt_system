const mongoose = require('mongoose');

const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    gender: { type: String, enum: ['male', 'female', 'other'] },
    address: { type: String },
    occupation: { type: String }
  },
  {
    collection: 'users',
    timeStamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

module.exports = mongoose.model('Users', UserSchema);
