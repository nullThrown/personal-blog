const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { requiredStr } = require('./fieldTypes');
const PostSchema = new Schema(
  {
    author: requiredStr,
    title: requiredStr,
    body: requiredStr,
    category: requiredStr,
    keywords: [{ type: String }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('post', PostSchema);
