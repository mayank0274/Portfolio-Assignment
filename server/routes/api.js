const express = require("express");
const apiRouter = express.Router();

const getProjects = require("../controllers/getProjects");
const getTechnologies = require("../controllers/getTechnologies");

apiRouter.get("/projects", getProjects);
apiRouter.get("/technologies", getTechnologies);

module.exports = apiRouter;
