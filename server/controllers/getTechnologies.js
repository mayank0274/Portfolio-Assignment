const techModel = require("../models/technologies");
const CustomErrorHandler = require("../utlis/customErrorHandler");
const catchAsyncErrors = require("../utlis/catchAsyncErrors");

const getTechnologies = catchAsyncErrors(async (req, res, next) => {
  try {
    const technologies = await techModel.find();

    res.status(200).json({ technologies });
  } catch (error) {
    next(
      CustomErrorHandler.uncaughtError(
        "some error occured in fetching technologies"
      )
    );
  }
});

module.exports = getTechnologies;
