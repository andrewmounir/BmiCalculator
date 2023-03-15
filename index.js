const express = require(`express`);
const bodyParser = require(`body-parser`);
const { log } = require("console");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.listen(3000, () => {
  console.log(`server has started on port 3000`);
});

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.post("/bmicalculator", (req, res) => {
  let a = Number(req.body.weight);
  let b = Number(req.body.height);
  let result = Math.round(100 * (a / (Math.pow(b, 2) / 100)));
  res.send(`your bmi is ` + result + `%`);
  console.log(result);
});
