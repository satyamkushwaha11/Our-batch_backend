const { model, Schema } = require("mongoose");

const postSchema = new Schema({
  title: {
    type: String,
  },
  files:{
    type:Array
  },
  mentions:{
    type:Array
  },

});

module.export = model("Posts", postSchema);
