const mongoose = require('mongoose');

const { ObjectId } = mongoose.Schema;

const UserSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    email_verified: { type: Boolean, default: false },
    phone: { type: String, unique: true },
    phone_verified: { type: Boolean, default: false },
    gender: { type: String, enum: ['M', 'F', 'O', 'U'], default: 'U' },
    dob: { type: Date },
    address: String,
    password: { type: String, required: true, select: false },
    is_approved: { type: Boolean, default: false, required: true },
    is_active: { type: Boolean, default: true, required: true },
    picture: String,
    social: Object,
    roles: [String],
    extras: {
      occupation: String,
      documents: [],
      branch: String,
      department: String,
      description: String
    },
    created_by: { type: ObjectId, ref: 'Users' },
    updated_by: { type: ObjectId, ref: 'Users' }
  },
  {
    collection: 'users',
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
);

module.exports = mongoose.model('Users', UserSchema);
