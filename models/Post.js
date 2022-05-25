const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { requiredStr, requiredBool } = require('./fieldTypes');
const PostSchema = new Schema(
  {
    author: requiredStr,
    title: requiredStr,
    body: requiredStr,
    category: requiredStr,
    private: requiredBool,
    keywords: [{ type: String }],
  },
  { timestamps: true }
);

// mongoose.model method is creating empty post model
// we only need to export this schema
module.exports = mongoose.model('post', PostSchema);
// module.exports = PostSchema;
