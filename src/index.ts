import express from "express";

const app = express();

app.all("*", (req, res) => {
  console.log("Starting JS evaluation");
  console.group("JS evaluation");
  res.send(eval(req.body || req.query.data));
  console.groupEnd();
  console.log("Ending JS Evaluation");
});

app.listen(3000, () => console.log("Listening on port 3000"));

