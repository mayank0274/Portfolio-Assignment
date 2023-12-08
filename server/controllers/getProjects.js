const projectModel = require("../models/project");
const CustomErrorHandler = require("../utlis/customErrorHandler");
const catchAsyncErrors = require("../utlis/catchAsyncErrors");

const getProjects = catchAsyncErrors(async (req, res, next) => {
  try {
    const projects = await projectModel.find();

    res.status(200).json({ projects });
  } catch (error) {
    next(
      CustomErrorHandler.uncaughtError(
        "some error occured in fetching projects"
      )
    );
  }
});

module.exports = getProjects;
