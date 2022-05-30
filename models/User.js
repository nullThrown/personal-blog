const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const PostSchema = require('./Post');
const { requiredStr } = require('./fieldTypes');
const UserSchema = new Schema(
  {
    username: { ...requiredStr, unique: true },
    email: { ...requiredStr, unique: true },
    password: requiredStr,
    categories: [
      {
        type: String,
      },
    ],
    posts: [PostSchema],
  },
  { timestamps: true }
);

module.exports = mongoose.model('user', UserSchema);
