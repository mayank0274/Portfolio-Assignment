const mongoose = require("mongoose");

const techSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "technology title is required"],
    },
    icon: {
      type: String,
      required: [true, " technology icon is required"],
    },
  },
  { timestamps: true }
);

const techModel = mongoose.model("Technologies", techSchema);

module.exports = techModel;
