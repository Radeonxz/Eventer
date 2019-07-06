const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {type: String, required: true},
  password: {type: String, unique: true, required: true},
  createdEvents: [
    {
      type: Schema.Types.ObjectId,
      ref: 'GraphEvent'
    }
  ]
});

module.exports = mongoose.model('GraphUser', userSchema);