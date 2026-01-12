// const express = require('express')
const express = require("express");
import dbConnection from "./database/connection";
import tables from "./database/tables";
import * as controllers from "./controllers";
import cors from 'cors'

const corsOptions = {
  origin: '*',
  credentials: true,
  optoinSuccessStatus: 200
}

const port = 3000;
const app = express();
app.use(cors(corsOptions))

app.use(express.json());

Object.keys(controllers).forEach((key) => {
  const controller = controllers[key];
  controller(app);
});

dbConnection.connect((error: Error) => {
  if (error) {
    console.error(error);
  } else {
    tables.init(dbConnection);
    console.log("Data Base suppliers_payments CONNECTED");
    app.listen(port, () =>
      console.log(`Server running in: http://localhost/${port}`)
    );
  }
});
