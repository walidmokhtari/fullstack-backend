const express = require('express');
const bodyParser = require('body-parser');
const config = require("../configs");
const port = config.server.port;

const app = express();

app.use(bodyParser.json());

exports.start = () => {
  app.listen(port, (err) => {
    if (err) {
      console.log(`Errors: ${err}`);
      process.exit(-1);
    }
    console.log(`app is runnning on port ${port}`);
  });
};
