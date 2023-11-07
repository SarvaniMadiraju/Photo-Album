const mongoose = require('mongoose');

const uploadSchema = new mongoose.Schema({
  photo: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
});

const UploadModel = mongoose.model('Upload', uploadSchema);

module.exports = UploadModel;
