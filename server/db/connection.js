const mongoose = require("mongoose");

const connectToDb = () => {
  mongoose
    .connect(process.env.MONGO_CONN_URL)
    .then(() => {
      console.log("connection to db successfull");
    })
    .catch((err) => {
      console.log("connection to db failed");
      console.log(err);
    });
};

module.exports = {
  connectToDb,
};
