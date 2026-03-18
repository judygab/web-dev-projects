const mongoose = require('mongoose')

const userSchema = mongoose.Schema(
    {
      _id: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
    },
    {
      timestamps: true,
    }
  );


module.exports = mongoose.model("User", userSchema);