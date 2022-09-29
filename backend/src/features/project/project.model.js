const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({

  user:{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
  title:{
    type:String,
    required:true
  }
});

const Project = mongoose.model("project", projectSchema);
module.exports = Project;
