const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Project title is required"],
    },
    thumbnail: {
      type: String,
      required: [true, "Project thumbnail is required"],
    },
    previewUrl: {
      type: String,
    },
    tags: {
      type: [
        {
          title: String,
        },
      ],
    },
  },
  { timestamps: true }
);

const projecModel = mongoose.model("Project", projectSchema);

module.exports = projecModel;
