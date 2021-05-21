import express from "express";
import { text as bodyText } from "body-parser";

const app = express();

app.use(bodyText());

app.all("*", (req, res) => {
  console.log("Starting JS evaluation");
  console.group("JS evaluation");
  res.send(eval(req.body || req.query.data));
  console.groupEnd();
  console.log("Ending JS Evaluation");
});

app.listen(3000, () => console.log("Listening on port 3000"));

