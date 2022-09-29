const mongoose = require("mongoose");

const taskSchema = new mongoose.Schema({
    "project":{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'project',
    required: true
    },
  title: { type: String, required: true },
  duration: { type: Number, required: true, },
  
});

const Task = mongoose.model("task", taskSchema);
module.exports = Task;
