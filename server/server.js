require("dotenv").config();
const express = require("express");
const { connectToDb } = require("./db/connection");
const errorHandler = require("./middlewares/errorHandler");
const apiRouter = require("./routes/api");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 5000;

// middlewares
app.use(express.json());

// cors
app.use(cors());

// connection to db
connectToDb();

// api routes
app.use("/api/v1", apiRouter);

app.get("/test", (req, res) => {
  res.send("test route");
});

app.all("*", (req, res) => {
  res.status(400).json({ error: "route not found" });
});

// error handler middleware
app.use(errorHandler);

app.listen(PORT, () => {
  console.log("app listening at " + PORT);
});
